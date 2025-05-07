#Exercise 1 : Convert lists into dictionaries

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))

print(result)

#Exercise 2 : Cinemax #2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    print(f"{name.title()} has to pay ${price}")
    total_cost += price

print(f"\nTotal cost for the family: ${total_cost}")

#Exercise 3: Zara
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2

clients = ", ".join(brand["type_of_clothes"])
print(f"Zara's clients are: {clients}")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print("Last international competitor:", brand["international_competitors"][-1])

print("Major colors in the US:", brand["major_color"]["US"])

print("Total number of keys in brand dictionary:", len(brand))

print("Dictionary keys:", list(brand.keys()))

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print("Updated number of stores:", brand["number_stores"])

#exercise 4

def describe_city(city,country="morocco"):
    print(f"{city} is in {country}")

describe_city("Casablanca")
describe_city("Tokyo", "Japan")
describe_city("Reykjavik", "Iceland")

#exercice 5

import random

def guess_number(user_number):
    if not 1 <= user_number <= 100:
        print("Please enter a number between 1 and 100.")
        return
    
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
        print(" Success! You guessed the number correctly!")
    else:
        print(f"Try again. Your number: {user_number}, Random number: {random_number}")

guess_number(110)
guess_number(14)
guess_number(67)

#exercice 6
def make_shirt(size, message):
    print(f"The size of the shirt is {size} and the text is '{message}'.")

make_shirt("Medium", "Code more, worry less.")

def make_shirt(size="Large", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{message}'.")

make_shirt()
make_shirt("Medium")
make_shirt("Small", "Hello World!")

make_shirt(message="Keep coding!", size="Extra Large")
#exercice 7
import random
def get_random_temp(season):
    if season == "winter":
        return round(random.uniform(-10,16),1)
    elif season == "spring":
        return round(random.uniform(5, 22), 1)
    elif season == "summer":
        return round(random.uniform(20, 40), 1)
    elif season == "autumn" or season == "fall":
        return round(random.uniform(5, 20), 1)
    else:
        return round(random.uniform(-10, 40), 1)

def get_season_from_month(month):
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"
    
def main():
    try:
        month = int(input("Enter the number of the month (1 = January, 12 = December): "))
        if month < 1 or month > 12:
            print("Invalid month number.")
            return

        season = get_season_from_month(month)
        temp = get_random_temp(season)
        print(f"The temperature right now is {temp} degrees Celsius.")

        if temp < 0:
            print("Brrr, that’s freezing! Wear some extra layers today.")
        elif 0 <= temp <= 16:
            print("Quite chilly! Don’t forget your coat.")
        elif 17 <= temp <= 23:
            print("Nice weather! Maybe a light jacket will do.")
        elif 24 <= temp <= 32:
            print("It's warm outside! Stay hydrated.")
        elif 33 <= temp <= 40:
            print("It's really hot! Better stay cool and wear sunscreen.")
    except ValueError:
        print("Please enter a valid number for the month.")
main()

#exercise 8

def ask_question(question, correct_answer):
    """Ask the user a question and check if the answer is correct."""
    user_answer = input(f"{question} ")
    return user_answer.strip().lower() == correct_answer.lower()

def quiz_game():
    data = [
        {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
        {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
        {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
        {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
        {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
        {"question": "What species is Chewbacca?", "answer": "Wookiee"}
    ]
    
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []
    
    for entry in data:
        question = entry["question"]
        correct_answer = entry["answer"]
        
        if ask_question(question, correct_answer):
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append((question, correct_answer))
    
    print(f"\nYou got {correct_answers} correct answers and {incorrect_answers} incorrect answers.")
    
    if incorrect_answers > 0:
        print("\nYou got the following questions wrong:")
        for question, correct_answer in wrong_answers:
            print(f"Question: {question}\nYour Answer: {input(f'Enter your answer for {question} again: ')}\nCorrect Answer: {correct_answer}\n")
    
    if incorrect_answers > 3:
        print("\nYou had more than 3 incorrect answers. Let's play again!")
        play_again = input("Do you want to try the quiz again? (yes/no): ").strip().lower()
        if play_again == 'yes':
            quiz_game()
        else:
            print("Thanks for playing!")
    else:
        print("Thanks for playing!")
quiz_game()
