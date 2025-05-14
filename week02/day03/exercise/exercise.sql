-- exercise 1

-- 1. Get all languages
SELECT * FROM language;

-- 2. Get all films with their languages
SELECT film.title, film.description, language.name AS language_name
FROM film
JOIN language ON film.language_id = language.language_id;

-- 3. Get all languages, even if no films
SELECT film.title, film.description, language.name AS language_name
FROM language
LEFT JOIN film ON film.language_id = language.language_id;

-- 4. Create new_film table and add films
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO new_film (name) VALUES
('Dreamscape'),
('Iron Sea');

-- 5. Create customer_review table
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255),
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Add two reviews
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Amazing Story', 9, 'Really loved the movie, great pacing and plot.'),
(2, 2, 'Not bad', 7, 'Interesting themes and visuals.');

-- 7. Delete a film with a review
DELETE FROM new_film WHERE id = 1;


-- exercise 2

-- 1. Update language of some films
UPDATE film SET language_id = 2 WHERE film_id IN (1, 2, 3);

-- 2. Foreign keys for customer table:
-- store_id -> store(store_id)
-- address_id -> address(address_id)

-- 3. Drop customer_review table
DROP TABLE customer_review;

-- 4. Count outstanding rentals
SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

-- 5. 30 most expensive movies not returned
SELECT f.title, f.rental_rate
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

-- 6. Friend's rental search

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
AND f.description ILIKE '%sumo%';

-- Film 2: Short documentary (< 1h), rated R
SELECT title
FROM film
WHERE length < 60 AND rating = 'R';

-- Film 3: Matthew Mahan's rental > $4 between July 28 - Aug 1
SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND p.amount > 4
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- Film 4: Matthew + 'boat' in title or description + expensive
SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;
