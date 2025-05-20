import psycopg2
import bcrypt

# --- Database connection class ---
class DbConnection:
    def __init__(self, dbname="Restaurant", user="postgres", password="ayoub123", host="localhost"):
        self.dbname = dbname
        self.user = user
        self.password = password
        self.host = host

    def connect(self):
        try:
            connection = psycopg2.connect(
                dbname=self.dbname,
                user=self.user,
                password=self.password,
                host=self.host
            )
            return connection
        except psycopg2.OperationalError as e:
            print("Database connection failed:", e)
            exit()

# --- User Auth Functions ---
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
        conn = self.db.connect()
        cur = conn.cursor()
        hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
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

# --- CLI Interface ---
def authentication_cli():
    auth = AuthManager()
    logged_in = None

    while True:
        print("\nChoose an option: 'login', 'signup', or 'exit'")
        action = input("Action: ").strip().lower()

        if action == "exit":
            print("Goodbye!")
            break

        elif action == "login":
            username = input("Username: ")
            password = input("Password: ")
            if auth.check_login(username, password):
                print("You are now logged in.")
                logged_in = username
            else:
                print("Invalid credentials.")
        
        elif action == "signup":
            while True:
                username = input("Choose a username: ")
                if auth.user_exists(username):
                    print("Username already exists. Try again.")
                else:
                    break
            password = input("Choose a password: ")
            auth.create_user(username, password)
            print("User created successfully.")
        
        else:
            print("Invalid option. Try again.")

# --- Run the CLI ---
if __name__ == "__main__":
    authentication_cli()
