#exercise 1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Whiskers", 5)
cat2 = Cat("Luna", 8)
cat3 = Cat("Shadow", 3)

def find_oldest_cat(cat1, cat2, cat3):
    oldest = cat1
    if cat2.age > oldest.age:
        oldest = cat2
    if cat3.age > oldest.age:
        oldest = cat3
    return oldest

oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

#exercise 2

class dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    def bark(self):
        print(f"{self.name} goes woof!")
        
    def jump(self):
        jump_height = self.height * 2 
        print(f"{self.name} jumps {jump_height} cm heigh!")
        
davids_dog = dog("Rex",50)
sarahs_dog = dog("Bella",30)

print(f"david's dog name {davids_dog.name} and it is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

print(f"sarah's dog name {sarahs_dog.name} and it is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller than {sarahs_dog.name}.")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}.")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are the same height.")

#exercise 3

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()

#exercise 4
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        self.grouped_animals = {}

        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in self.grouped_animals:
                self.grouped_animals[first_letter] = [animal]
            else:
                self.grouped_animals[first_letter].append(animal)

        return self.grouped_animals

    def get_groups(self):
        if hasattr(self, 'grouped_animals'):
            for key, group in self.grouped_animals.items():
                print(f"{key}: {group}")
        else:
            print("You need to sort animals first using sort_animals().")

ramat_gan_safari = Zoo("Ramat Gan Safari")

# test
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Zebra")

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Bear")
print("\nAfter selling Bear:")
ramat_gan_safari.get_animals()

print("\nGrouped Animals:")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
