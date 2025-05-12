--------> Create a database called public.
--------> Add two tables: items | customers.

-- CREATE TABLE items(
--  item_id SERIAL PRIMARY KEY,
--  item_name VARCHAR (50) NOT NULL,
--  price INT NOT NULL
-- );

-- CREATE TABLE customers(
--  customer_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL
-- );

--------> Add the following items to the items table:

-- INSERT INTO items (item_name, price) VALUES 
--     ('Small Desk', 100), 
--     ('Large desk', 300),
--     ('Fan', 80);

--------> Add 5 new customers to the customers table:

-- INSERT INTO customers (first_name, last_name) VALUES 
-- 	('Greg','Jones'), 
-- 	('Sandra','Jones'),
-- 	('Scott','Scott'),
-- 	('Trevor','Green'),
-- 	('Melanie','Johnson');

--------> All the items
-- select * from items

--------> All the items with a price above 80 (80 not included).
-- select * from items where price > 80

--------> All the items with a price below 300. (300 included)
-- select * from items where price <= 300

--------> All customers whose last name is ‘Smith’
-- select * from customers where last_name = 'Smith'
----> The outcome was a blank table with fields only

--------> All customers whose last name is ‘Jones’.
-- select * from customers where last_name = 'Jones'

--------> All customers whose firstname is not ‘Scott’.
-- select * from customers WHERE first_name != 'Scott';

