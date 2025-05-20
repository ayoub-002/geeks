from sqlalchemy.orm import Session
import models, schemas
from auth import get_password_hash

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(username=user.username, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_users(db: Session):
    return db.query(models.User).all()

def delete_user(db: Session, user_id: int):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user:
        db.delete(user)
        db.commit()

def create_book(db: Session, title: str, author_id: int, category_id: int = None):
    book = models.Book(title=title, author_id=author_id, category_id=category_id)
    db.add(book)
    db.commit()
    db.refresh(book)
    return book

def get_books(db: Session):
    return db.query(models.Book).all()

def update_book(db: Session, book_id: int, title: str):
    book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if book:
        book.title = title
        db.commit()
        db.refresh(book)
    return book

def delete_book(db: Session, book_id: int):
    book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if book:
        db.delete(book)
        db.commit()

def create_review(db: Session, content: str, reviewer_id: int, book_id: int):
    review = models.Review(content=content, reviewer_id=reviewer_id, book_id=book_id)
    db.add(review)
    db.commit()
    db.refresh(review)
    return review

def get_reviews(db: Session):
    return db.query(models.Review).all()

def create_category(db: Session, category: schemas.CategoryCreate):
    db_category = models.Category(name=category.name)
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category

def get_categories(db: Session):
    return db.query(models.Category).all()

def update_category(db: Session, category_id: int, name: str):
    category = db.query(models.Category).filter(models.Category.id == category_id).first()
    if category:
        category.name = name
        db.commit()
        db.refresh(category)
    return category

def delete_category(db: Session, category_id: int):
    category = db.query(models.Category).filter(models.Category.id == category_id).first()
    if category:
        db.delete(category)
        db.commit()
