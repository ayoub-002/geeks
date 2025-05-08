birthdate = input("Enter your birthdate (DD/MM/YYYY): ")

day = int(birthdate[:2])
month = int(birthdate[3:5])
year = int(birthdate[6:])

today_day = 7
today_month = 5
today_year = 2025

age = today_year - year
if (today_month, today_day) < (month, day):
    age -= 1

candles = age % 10
if candles == 0:
    candles = 1

candle_line = "       ___" + "i" * candles + "___"

print("\nHere's your birthday cake!")
print(candle_line)
print("      |:H:a:p:p:y:|")
print("    __|___________|__")
print("   |^^^^^^^^^^^^^^^^^|")
print("   |:B:i:r:t:h:d:a:y:|")
print("   |                 |")
print("   ~~~~~~~~~~~~~~~~~~~")

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("\nWow! You were born in a leap year! Here's another one 🎂")
    print(candle_line)
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")
