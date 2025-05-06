#Exercise 1 : Hello World

print("hello world\n"*4)

#Exercise 2 : Some Math

(99**3)*8

#Exercise 3 : What’s your name ?

if ("ayoub" == input("entre your name : ")) :
    print("wow we have the same name")
else :
    print("oh no not the same name ")

#Exercise 4 : Tall enough to ride a roller coaster

height = 145
if (height < int(input("entre your height in centimeters : "))) :
    print("you have enough height to ride the rollercoaster")
else :
    print("you need to grow some more to ride")

#Exercise 5 : Favorite Numbers

my_fav_numbers = {7,10,13,6}

my_fav_numbers.add(3)
my_fav_numbers.add(50)
my_fav_numbers.remove(list(my_fav_numbers)[-1])
friend_fav_numbers = {15,9,1,0}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#Exercise 6: Tuple

#NO it's not pusibl in tuple

#Exercise 6: Tuple

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
basket.count("Apples")
basket.clear()
print(basket)

#Exercise 8 : Sandwich Orders

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich","Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    print(f"I made your {sandwich.lower()}")
    finished_sandwiches.append(sandwich)



