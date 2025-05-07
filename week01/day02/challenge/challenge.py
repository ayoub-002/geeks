def create_letter_index_dict(word):
    letter_dict = {}

    for index, letter in enumerate(word):
        if letter not in letter_dict:
            letter_dict[letter] = []
        letter_dict[letter].append(index)
    
    return letter_dict

word = input("Enter a word: ")

result = create_letter_index_dict(word)

print(result)
