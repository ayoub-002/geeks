from fastapi import FastAPI, Depends, HTTPException, Request
import models, schemas, auth, crud
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from auth import authenticate_user, create_access_token, get_current_user
from middleware import admin_required

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.post("/register", response_model=schemas.UserOut)
def register(user: schemas.UserCreate, db: Session = Depends(SessionLocal)):
    return crud.create_user(db, user)

@app.post("/login")
def login(user: schemas.UserCreate, db: Session = Depends(SessionLocal)):
    db_user = authenticate_user(db, user.username, user.password)
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    access_token = create_access_token(
        data={"sub": db_user.username, "is_admin": db_user.is_admin}
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/books", response_model=schemas.BookOut)
def create_book(book: schemas.BookCreate, db: Session = Depends(SessionLocal), current_user: models.User = Depends(get_current_user)):
    return crud.create_book(db, book.title, current_user.id, book.category_id)

@app.get("/books", response_model=list[schemas.BookOut])
def read_books(db: Session = Depends(SessionLocal)):
    return crud.get_books(db)

@app.put("/books/{book_id}", response_model=schemas.BookOut)
def update_book(book_id: int, book: schemas.BookCreate, db: Session = Depends(SessionLocal), current_user: models.User = Depends(get_current_user)):
    existing_book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if existing_book.author_id != current_user.id:
        raise HTTPException(status_code=403, detail="You can only update your own books")
    return crud.update_book(db, book_id, book.title)

@app.delete("/books/{book_id}")
def delete_book(book_id: int, db: Session = Depends(SessionLocal), current_user: models.User = Depends(get_current_user)):
    book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if book.author_id != current_user.id and not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Not authorized")
    crud.delete_book(db, book_id)
    return {"message": "Book deleted"}

@app.post("/reviews", response_model=schemas.ReviewOut)
def create_review(review: schemas.ReviewCreate, db: Session = Depends(SessionLocal), current_user: models.User = Depends(get_current_user)):
    return crud.create_review(db, review.content, current_user.id, review.book_id)

@app.get("/reviews", response_model=list[schemas.ReviewOut])
def read_reviews(db: Session = Depends(SessionLocal)):
    return crud.get_reviews(db)

@app.get("/admin/users", response_model=list[schemas.UserOut])
def get_all_users(request: Request, db: Session = Depends(SessionLocal)):
    admin_required(request)
    return crud.get_users(db)

@app.delete("/admin/users/{user_id}")
def delete_user(user_id: int, request: Request, db: Session = Depends(SessionLocal)):
    admin_required(request)
    crud.delete_user(db, user_id)
    return {"message": "User deleted"}

@app.post("/categories", response_model=schemas.CategoryOut)
def create_category(category: schemas.CategoryCreate, db: Session = Depends(SessionLocal), current_user: models.User = Depends(get_current_user)):
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Only admins can create categories")
    return crud.create_category(db, category)

@app.get("/categories", response_model=list[schemas.CategoryOut])
def read_categories(db: Session = Depends(SessionLocal)):
    return crud.get_categories(db)

@app.put("/categories/{category_id}", response_model=schemas.CategoryOut)
def update_category(category_id: int, category: schemas.CategoryCreate, db: Session = Depends(SessionLocal), current_user: models.User = Depends(get_current_user)):
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Only admins can update categories")
    return crud.update_category(db, category_id, category.name)

@app.delete("/categories/{category_id}")
def delete_category(category_id: int, db: Session = Depends(SessionLocal), current_user: models.User = Depends(get_current_user)):
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Only admins can delete categories")
    crud.delete_category(db, category_id)
    return {"message": "Category deleted"}

