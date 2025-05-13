-- Create tables and insert data
CREATE TABLE FirstTab (
    id integer, 
    name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

CREATE TABLE SecondTab (
    id integer 
);

INSERT INTO SecondTab VALUES
(5),
(NULL);

-- Q1: 0 -- NULL in subquery makes comparison unknown, so no match
SELECT COUNT(*) AS Q1_Result 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id IS NULL
);

-- Q2: 2 -- Only IDs 6 and 7 are not 5
SELECT COUNT(*) AS Q2_Result 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id = 5
);

-- Q3: 0 -- NULL in subquery makes NOT IN return nothing
SELECT COUNT(*) AS Q3_Result 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab
);

-- Q4: 2 -- NOT IN (5) matches IDs 6 and 7
SELECT COUNT(*) AS Q4_Result 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id IS NOT NULL
);