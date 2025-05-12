-- 1. Create actors table
CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    birth_date DATE
);

-- 2. Insert sample actors
INSERT INTO actors (first_name, last_name, birth_date) VALUES
('Tom', 'Hanks', '1956-07-09'),
('Meryl', 'Streep', '1949-06-22'),
('Denzel', 'Washington', '1954-12-28');

-- 3. Count number of actors
SELECT COUNT(*) AS total_actors FROM actors;

-- 4. Try to insert a new actor with a missing last name
INSERT INTO actors (first_name) VALUES ('');
