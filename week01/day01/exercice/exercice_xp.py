# exercise 1
month = int(input("Enter a month number (1-12): "))

if month in [3, 4, 5]:
    season = "Spring"
elif month in [6, 7, 8]:
    season = "Summer"
elif month in [9, 10, 11]:
    season = "Autumn"
elif month in [12, 1, 2]:
    season = "Winter"
else:
    season = "Invalid month"

print("Season is", season)

#exercise 2

#1
for i in range(1, 21):
    print(i)
#2
numbers = list(range(1, 21))

for i in range(len(numbers)):
    if i % 2 == 0:
        print(numbers[i])

#exercise 3

my_name = "ayoub"
user_name = input("What is your name? ")

while user_name != my_name:
    user_name = input("What is your name?")

print("okey thank you")

#exercise 4
names = ['ayoub', 'anass', 'PP', 'youness', 'youssef', 'said', 'adam']
user_name = input("Enter your name: ")

if user_name in names:
    print("Your name first appears at index:", names.index(user_name))
else:
    print("Your name is not in the list.")

#exercise 4

num1 = int(input("Input the 1st number: "))
num2 = int(input("Input the 2nd number: "))
num3 = int(input("Input the 3rd number: "))

if num1 >= num2 and num1 >= num3:
    greatest = num1
elif num2 >= num1 and num2 >= num3:
    greatest = num2
else:
    greatest = num3

print("The greatest number is:", greatest)

#exercise 5

import random

wins = 0
losses = 0

while True:
    random_number = random.randint(1, 9)

    guess = input("Guess a number between 1 and 9 (or type 'quit' to exit): ")
    
    if guess.lower() == 'quit':
        break

    if not guess.isdigit() or not (1 <= int(guess) <= 9):
        print("Invalid input. Please enter a number between 1 and 9.")
        continue

    guess = int(guess)

    if guess == random_number:
        print("Winner!")
        wins += 1
    else:
        print(f"Better luck next time! The correct number was {random_number}.")
        losses += 1
print(f"\nGame Over! You won {wins} time(s) and lost {losses} time(s).")
