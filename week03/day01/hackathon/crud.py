from sqlalchemy.orm import Session
import models, schemas
from auth import get_password_hash

# Users

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(username=user.username, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Books

def create_book(db: Session, book: schemas.BookCreate, user_id: int):
    db_book = models.Book(title=book.title, category_id=book.category_id, author_id=user_id)
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book

# Reviews

def create_review(db: Session, review: schemas.ReviewCreate, reviewer_id: int):
    db_review = models.Review(content=review.content, book_id=review.book_id, reviewer_id=reviewer_id)
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review

# Categories

def create_category(db: Session, category: schemas.CategoryCreate):
    db_category = models.Category(name=category.name)
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category
