#exercise1

birthdays = {
    "Alice": "1990/05/21",
    "Bob": "1985/12/10",
    "Charlie": "1992/03/15",
    "Diana": "1988/09/30",
    "Ethan": "1995/07/25"
}

print("Welcome! You can look up the birthdays of the people in the list.")

name = input("Enter a name: ")

if name in birthdays:
    print(f"{name}'s birthday is on {birthdays[name]}.")
else:
    print("Name not found.")

#exercise2

birthdays = {
    "Alice": "1990/05/21",
    "Bob": "1985/12/10",
    "Charlie": "1992/03/15",
    "Diana": "1988/09/30",
    "Ethan": "1995/07/25"
}

print("Welcome! You can look up the birthdays of the people in the list.")
print("Here are the available names:")
for name in birthdays:
    print(f"- {name}")

user_input = input("\nEnter a name to look up their birthday: ")

if user_input in birthdays:
    print(f"{user_input}'s birthday is on {birthdays[user_input]}.")
else:
    print(f"Sorry, we don’t have the birthday information for {user_input}.")
    
#exercise3

def calculate_sequence(x):
    x_str = str(x)
    total = int(x_str) + int(x_str*2) + int(x_str*3) + int(x_str*4)
    return total

#exercise4

import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    count = 0
    while True:
        die1 = throw_dice()
        die2 = throw_dice()
        count += 1
        if die1 == die2:
            break
    return count

def main():
    throws_list = []
    for _ in range(100):
        throws = throw_until_doubles()
        throws_list.append(throws)

    total_throws = sum(throws_list)
    average_throws = round(total_throws / 100, 2)

    print(f"\nTotal throws to get 100 doubles: {total_throws}")
    print(f"Average throws per double: {average_throws}")

main()




