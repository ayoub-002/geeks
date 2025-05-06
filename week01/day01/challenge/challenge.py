#chalenge 1

number = int(input("enter number:"))
length = int(input("enter the length:"))

multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)

print("Multiples list:", multiples)

#chalenge 2

user_input = input("Enter a word: ")


result = user_input[0] if user_input else ""

for char in user_input[1:]:
    if char != result[-1]:
        result += char

print("Word with consecutive duplicates removed:", result)
