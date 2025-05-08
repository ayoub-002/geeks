matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

rows = len(matrix)
cols = len(matrix[0])
message = ""

for col in range(cols):
    for row in range(rows):
        char = matrix[row][col]
        if char.isalpha():
            message += char
        else:
            message += " "


words = message.split()
final_message = " ".join(words)

print(final_message)
