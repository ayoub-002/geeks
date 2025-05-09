# rock-paper-scissors.py
from game import Game

def show_menu():
    print("Menu:")
    print("  (g) Play a new game")
    print("  (x) Show scores and exit")

def main():
    game = Game()
    wins = 0
    losses = 0
    draws = 0

    while True:
        show_menu()
        choice = input(" : ").lower()

        if choice == 'g':
            result = game.play()
            if result == "win":
                wins += 1
            elif result == "loss":
                losses += 1
            else:
                draws += 1
        elif choice == 'x':
            print("\nGame Results:")
            print(f"  You won {wins} times")
            print(f"  You lost {losses} times")
            print(f"  You drew {draws} times")
            print("\nThank you for playing!")
            break
        else:
            print("Invalid option. Please choose 'g' or 'x'.")

if __name__ == "__main__":
    main()
