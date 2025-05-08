# Exercise 1: Pets

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} is just walking around"

class Bengal(Cat):
    def sing(self, sounds):
        return f"{sounds}"

class Chartreux(Cat):
    def sing(self, sounds):
        return f"{sounds}"

class Siamese(Cat):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.origin = "Thailand"

all_cats = [Bengal("Milo", 3), Chartreux("Luna", 5), Siamese("Leo", 2)]
sara_pets = Pets(all_cats)
sara_pets.walk()


# Exercise 2: Dogs

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if self_power > other_power:
            return f"{self.name} wins the fight"
        else:
            return f"{other_dog.name} wins the fight"

bruno = Dog("Bruno", 4, 20)
rocky = Dog("Rocky", 2, 25)
buddy = Dog("Buddy", 5, 18)

print(bruno.bark())
print(rocky.run_speed())
print(buddy.fight(bruno))


# Exercise 3: Dogs Domesticated

import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dogs = ", ".join([self.name] + [dog for dog in args])
        print(f"{dogs} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")

fido = PetDog("Fido", 3, 15)
fido.train()
fido.play("Max", "Charlie")
fido.do_a_trick()


# Exercise 4: Family and Person Classes

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18

class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        person = Person(first_name, age)
        person.last_name = self.last_name
        self.members.append(person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print("No such family member found.")

    def family_presentation(self):
        print(f"Family: {self.last_name}")
        for person in self.members:
            print(f"{person.first_name}, {person.age} years old")

smith_family = Family("Smith")
smith_family.born("Alice", 17)
smith_family.born("Bob", 20)
smith_family.family_presentation()
smith_family.check_majority("Alice")
smith_family.check_majority("Bob")
