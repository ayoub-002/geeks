-- exercise 1

-- All items, ordered by price (lowest to highest)
SELECT * FROM items
ORDER BY price ASC;

-- Items with a price above 80 (80 included), ordered by price (highest to lowest)
SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC;

-- First 3 customers ordered by first name (A-Z), exclude primary key
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

-- All last names (only), in reverse alphabetical order (Z-A)
SELECT last_name
FROM customers
ORDER BY last_name DESC;


-- exercise 2

-- 1. Select all columns from the customer table
SELECT * FROM customer;

-- 2. Display names as full_name
SELECT first_name || ' ' || last_name AS full_name
FROM customer;

-- 3. Get all unique account creation dates
SELECT DISTINCT create_date
FROM customer;

-- 4. Get all customer details in descending order by first_name
SELECT * FROM customer
ORDER BY first_name DESC;

-- 5. Film ID, title, description, release year, and rental rate ordered by rental rate
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

-- 6. Address and phone number of all customers living in Texas district
SELECT address, phone
FROM address
WHERE district = 'Texas';

-- 7. All movie details where film ID is 15 or 150
SELECT *
FROM film
WHERE film_id IN (15, 150);

-- 8. Check if a specific favorite movie exists
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Inception';

-- 9. Find movies starting with the first two letters (e.g., 'In')
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'In%';

-- 10. Find the 10 cheapest movies
SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- 11. Find the next 10 cheapest movies (without using LIMIT)
SELECT *
FROM (
  SELECT *, ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS rn
  FROM film
) sub
WHERE rn > 10 AND rn <= 20;

-- 12. Join customer and payment tables to get names, amount, and payment date
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

-- 13. Get all movies that are NOT in inventory
SELECT *
FROM film
WHERE film_id NOT IN (
    SELECT DISTINCT film_id FROM inventory
);

-- 14. Find which city is in which country
SELECT city.city, country.country
FROM city
JOIN country ON city.country_id = country.country_id;

-- 15. Get all customers with their payment details
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id asc
