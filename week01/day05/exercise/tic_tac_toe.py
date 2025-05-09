def display_board(board):
    print("\nTIC TAC TOE!")
    print("*" * 25)
    for row in board:
        print("*", " | ".join(row), "*")
    print("*" * 25)

def player_input(player):
    while True:
        try:
            row = int(input(f"Player {player}'s turn...\nEnter row (0, 1, 2): "))
            col = int(input("Enter column (0, 1, 2): "))
            if row in range(3) and col in range(3):
                return row, col
            else:
                print("Invalid input. Please enter numbers between 0 and 2.")
        except ValueError:
            print("Invalid input. Please enter a number.")

def check_win(board, player):
    for i in range(3):
        if all([cell == player for cell in board[i]]):
            return True
        if all([board[j][i] == player for j in range(3)]): 
            return True
    if all([board[i][i] == player for i in range(3)]) or \
       all([board[i][2-i] == player for i in range(3)]):
        return True
    return False

def is_board_full(board):
    return all(cell != " " for row in board for cell in row)

def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"

    while True:
        display_board(board)
        row, col = player_input(current_player)

        if board[row][col] != " ":
            print("That spot is already taken! Try again.")
            continue

        board[row][col] = current_player

        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            break

        if is_board_full(board):
            display_board(board)
            print("It's a tie!")
            break

        current_player = "O" if current_player == "X" else "X"

if __name__ == "__main__":
    play()
