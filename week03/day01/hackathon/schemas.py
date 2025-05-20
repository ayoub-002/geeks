from pydantic import BaseModel
from typing import List, Optional

class UserCreate(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    id: int
    username: str
    is_admin: bool

    class Config:
        orm_mode = True

class BookCreate(BaseModel):
    title: str
    category_id: Optional[int] = None

class BookOut(BookCreate):
    id: int
    author_id: int

    class Config:
        orm_mode = True

class ReviewCreate(BaseModel):
    content: str
    book_id: int

class ReviewOut(BaseModel):
    id: int
    content: str
    reviewer_id: int
    book_id: int

    class Config:
        orm_mode = True

class CategoryCreate(BaseModel):
    name: str

class CategoryOut(CategoryCreate):
    id: int

    class Config:
        orm_mode = True