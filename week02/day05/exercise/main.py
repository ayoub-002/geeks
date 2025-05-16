from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import psycopg2
import bcrypt

# database connection class
class DbConnection:
    def __init__(self, dbname="Restaurant", user="postgres", password="ayoub123", host="localhost"):
        self.dbname = dbname
        self.user = user
        self.password = password
        self.host = host

    def connect(self):
        return psycopg2.connect(
            dbname=self.dbname,
            user=self.user,
            password=self.password,
            host=self.host
        )

# pydantic models for request validation
class User(BaseModel):
    username: str
    password: str

class UserUpdate(BaseModel):
    username: str
    new_username: str
    new_password: str

# auth manager class
class AuthManager:
    def __init__(self):
        self.db = DbConnection()

    def user_exists(self, username):
        conn = self.db.connect()
        cur = conn.cursor()
        cur.execute("SELECT * FROM users WHERE username = %s", (username,))
        user = cur.fetchone()
        cur.close()
        conn.close()
        return user

    def create_user(self, username, password):
        hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        conn = self.db.connect()
        cur = conn.cursor()
        cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, hashed))
        conn.commit()
        cur.close()
        conn.close()

    def check_login(self, username, password):
        conn = self.db.connect()
        cur = conn.cursor()
        cur.execute("SELECT password FROM users WHERE username = %s", (username,))
        result = cur.fetchone()
        cur.close()
        conn.close()
        if result:
            return bcrypt.checkpw(password.encode(), result[0].encode())
        return False

    def get_all_users(self):
        conn = self.db.connect()
        cur = conn.cursor()
        cur.execute("SELECT username FROM users ORDER BY id")
        users = cur.fetchall()
        cur.close()
        conn.close()
        return [u[0] for u in users]

    def delete_user(self, username):
        conn = self.db.connect()
        cur = conn.cursor()
        cur.execute("DELETE FROM users WHERE username = %s", (username,))
        conn.commit()
        cur.close()
        conn.close()

    def update_user(self, username, new_username, new_password):
        hashed = bcrypt.hashpw(new_password.encode(), bcrypt.gensalt()).decode()
        conn = self.db.connect()
        cur = conn.cursor()
        cur.execute(
            "UPDATE users SET username = %s, password = %s WHERE username = %s",
            (new_username, hashed, username)
        )
        conn.commit()
        cur.close()
        conn.close()

auth = AuthManager()
app = FastAPI()

# API endpoints
@app.get("/users")
def list_users():
    return {"users": auth.get_all_users()}

@app.post("/signup")
def signup(user: User):
    if auth.user_exists(user.username):
        raise HTTPException(status_code=400, detail="Username already exists")
    auth.create_user(user.username, user.password)
    return {"message": "User created successfully"}

@app.post("/login")
def login(user: User):
    if auth.check_login(user.username, user.password):
        return {"message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.delete("/delete")
def delete_user(user: User):
    if not auth.user_exists(user.username):
        raise HTTPException(status_code=404, detail="User not found")
    auth.delete_user(user.username)
    return {"message": "User deleted successfully"}

@app.put("/update")
def update_user(data: UserUpdate):
    if not auth.user_exists(data.username):
        raise HTTPException(status_code=404, detail="Original user not found")
    auth.update_user(data.username, data.new_username, data.new_password)
    return {"message": "User updated successfully"}
