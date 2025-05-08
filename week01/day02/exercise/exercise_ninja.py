morse_code_dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
    'E': '.',  'F': '..-.', 'G': '--.',  'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-',  'L': '.-..',
    'M': '--', 'N': '-.',   'O': '---',  'P': '.--.',
    'Q': '--.-','R': '.-.', 'S': '...',  'T': '-',
    'U': '..-','V': '...-', 'W': '.--',  'X': '-..-',
    'Y': '-.--','Z': '--..',
    '1': '.----', '2': '..---','3': '...--','4': '....-','5': '.....',
    '6': '-....', '7': '--...','8': '---..','9': '----.','0': '-----',
    ' ': '/', ',': '--..--', '.': '.-.-.-'
}

morse_to_eng = {v: k for k, v in morse_code_dict.items()}

def eng_to_morse(text):
    return ' '.join(morse_code_dict.get(char.upper(), '') for char in text)

def morse_to_eng_func(code):
    return ''.join(morse_to_eng.get(word, '') for word in code.split())

print(eng_to_morse("hello world"))
print(morse_to_eng_func(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."))
