import requests
import psycopg2
import random

connection = psycopg2.connect(dbname="countries", user="postgres", password="ayoub123", host="localhost")

cursor = connection.cursor()


cursor.execute('''
CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    capital TEXT,
    flag TEXT,
    subregion TEXT,
    population INTEGER
);
''')
connection.commit()


def get_countries():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    data = response.json()
    return random.sample(data, 10)


def insert_countries():
    countries = get_countries()
    for country in countries:
        name = country["name"]["common"]
        capital = country["capital"][0] if "capital" in country else "N/A"
        flag = country["flags"]["png"]
        subregion = country.get("subregion", "N/A")
        population = country.get("population", 0)

        cursor.execute("INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s);",
                       (name, capital, flag, subregion, population))

    connection.commit()
    print(f"10 countries added to the database!")


insert_countries()

connection.close()
