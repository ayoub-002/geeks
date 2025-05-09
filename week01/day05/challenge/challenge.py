class Circle:
    pi = 3.1416

    def __init__(self, radius=None, diameter=None):
        if radius:
            self.radius = radius
        elif diameter:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either radius or diameter")

    @property
    def diameter(self):
        return self.radius * 2

    def area(self):
        return Circle.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f})"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius

    def __gt__(self, other):
        return self.radius > other.radius


circle1 = Circle(radius=3)
circle2 = Circle(diameter=8)

print(circle1)                           
print("Area of circle1:", circle1.area())  
print("Radius of circle2:", circle2.radius)
print("Diameter of circle2:", circle2.diameter)

circle3 = circle1 + circle2
print("Added circle:", circle3)

print("circle1 == circle2?", circle1 == circle2)
print("circle1 > circle2?", circle1 > circle2)

circles = [circle2, circle3, circle1]
circles.sort()
print("\nSorted Circles:")
for c in circles:
    print(c)
