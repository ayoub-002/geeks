import psycopg2

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

# --- MenuItem class ---
class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price
        self.db = DbConnection()

    def save(self):
        conn = self.db.connect()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", 
            (self.item_name, self.item_price)
        )
        conn.commit()
        cursor.close()
        conn.close()

    def delete(self):
        conn = self.db.connect()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.item_name,))
        conn.commit()
        cursor.close()
        conn.close()

    def update(self, new_name, new_price):
        conn = self.db.connect()
        cursor = conn.cursor()
        cursor.execute(
            "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", 
            (new_name, new_price, self.item_name)
        )
        conn.commit()
        cursor.close()
        conn.close()

# --- MenuManager class ---
class MenuManager:
    @classmethod
    def get_by_name(cls, item_name):
        db = DbConnection()
        conn = db.connect()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (item_name,))
        item = cursor.fetchone()
        cursor.close()
        conn.close()
        return item

    @classmethod
    def all_items(cls):
        db = DbConnection()
        conn = db.connect()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Menu_Items ORDER BY item_id")
        items = cursor.fetchall()
        cursor.close()
        conn.close()
        return items

# --- CLI Functions ---
def add_item_to_menu():
    name = input("Enter new item name: ")
    price = int(input("Enter item price: "))
    item = MenuItem(name, price)
    item.save()
    print(f"Item '{name}' added successfully!")

def remove_item_from_menu():
    name = input("Enter item name to remove: ")
    item = MenuItem(name, 0)
    existing = MenuManager.get_by_name(name)
    if existing:
        item.delete()
        print(f"Item '{name}' deleted successfully!")
    else:
        print(f"Item '{name}' not found.")

def update_item_from_menu():
    current_name = input("Enter current item name: ")
    existing = MenuManager.get_by_name(current_name)
    if not existing:
        print(f"Item '{current_name}' not found.")
        return
    new_name = input("Enter new item name: ")
    new_price = int(input("Enter new item price: "))
    item = MenuItem(current_name, 0)
    item.update(new_name, new_price)
    print(f"Item '{current_name}' updated to '{new_name}' with price {new_price}.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if not items:
        print("No items in the menu yet.")
        return
    print("\n--- Restaurant Menu ---")
    for item in items:
        print(f"ID: {item[0]} | Name: {item[1]} | Price: ${item[2]}")

def show_user_menu():
    while True:
        print("\nMenu Options:")
        print("A: Add an Item")
        print("D: Delete an Item")
        print("U: Update an Item")
        print("S: Show the Menu")
        print("X: Exit")
        choice = input("Choose an option: ").upper()

        if choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'X':
            print("Exiting. Final menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid option. Try again.")

# --- Run the CLI ---
if __name__ == "__main__":
    show_user_menu()
