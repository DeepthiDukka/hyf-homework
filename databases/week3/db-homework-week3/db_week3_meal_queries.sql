USE meals_share;

-- Get all meals;
select * from meal;
-- Add a new meal
insert into meal (
	title, 
	description,
	location, 
	`when`, 
	max_reservations, 
	price,
    created_date
	) values (
	'pizza meal', 
	'pizza with chicken&cheese topping', 
	'Bagsværd',
	'2020-06-03 14:00:00',
	4,
	99,
    '2020-06-03 12:00:00'
);

insert into meal (
	title, 
	description,
	location, 
	`when`, 
	max_reservations, 
	price,
    created_date
	) values (
	'sushi', 
	'California: Surimi, agurk og avokado', 
	'Bagsværd',
	'2020-06-05 14:00:00',
	3,
	80,
    '2020-06-05 18:00:00'
);

insert into meal (
	title, 
	description,
	location, 
	`when`, 
	max_reservations, 
	price,
    created_date
	) values (
	'indian', 
	'Butter Chicken', 
	'Nørreport',
	'2020-06-05 18:00:00',
	2,
	200,
    '2020-06-05 17:00:00'
);

insert into meal (
	title, 
	description,
	location, 
	`when`, 
	max_reservations, 
	price,
    created_date
	) values (
	'chinese', 
	'veg momos', 
	'Nørrebro',
	'2020-06-05 15:00:00',
	9,
	300,
    '2020-06-05 14:00:00'
);

-- Get a meal with any id, fx 1
select * from meal
where id = 1; 


-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

update meal 
set title = 'sushi - japan', max_reservations = 3
where id = 2;

select * from meal
where id = 2;

-- Delete a meal with any id, fx 1
delete from meal
where id = 4;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

update meal 
set title = 'indian veg meals', max_reservations = 3
where id = 3;

-- Queries with reservation
	-- Get all reservations

select * from reservation;

-- Add a new reservation
insert into reservation (number_of_guests,meal_id, created_date) values (5, 2, '2020-06-03 12:00:00'); 
insert into reservation (number_of_guests,meal_id, created_date) values (6, 1, '2020-06-05 18:00:00');
insert into reservation (number_of_guests,meal_id, created_date) values (7, 3, '2020-06-05 17:00:00');
insert into reservation (number_of_guests,meal_id, created_date) values (8, 4, '2020-06-05 14:00:00');

-- to confirm the above insertions:
select * from reservation;
-- Get a reservation with any id, fx 1
select * from reservation
where id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation
set number_of_guests = 4
where id = 1;

-- Delete a reservation with any id, fx 1
delete from reservation
where id = 1;

-- Queries with review
  -- Get all reviews

select * from review;

-- Add a new review
insert into review (
	title, 
	description,
	meal_id, 
	stars,
	created_date
	) values (
	'Awesome!!!', 
	'Amazing place with to spend with friends and family',
	 3 ,
	 4,
	 '2020-06-05 12:30:00'
 );
 
 insert into review (
	title, 
	description,
	meal_id, 
	stars,
	created_date
	) values (
	'Nice!!!', 
	'Good Food',
	 1 ,
	 5,
	 '2020-06-05 12:35:00'
 );
 
 insert into review (
	title, 
	description,
	meal_id, 
	stars,
	created_date
	) values (
	'Fantastic!!!', 
	'Loved the food',
	 2 ,
	 4,
	 '2020-06-05 12:40:00'
 );
 
 insert into review (
	title, 
	description,
	meal_id, 
	stars,
	created_date
	) values (
	'Nice', 
	'Great Food',
	 4 ,
	 5,
	 '2020-06-05 12:45:00'
 );

-- Get a review with any id, fx 1
select * from review
where id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review
set stars = 5
where id = 1;

-- Delete a review with any id, fx 1
delete from review
where id = 1;

-- Additional queries
	-- Get meals that has a price smaller than a specific price fx 90
 select * from meal
 where price < 90;
 
 -- Get meals that still has available reservations

select title, meal.id, max_reservations, number_of_guests
from meal
join reservation on meal.id = reservation.meal_id
where reservation.number_of_guests > meal.max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

select * from meal
where title like '%sushi%';

-- Get meals that has been created between two dates
select * from meal
where created_date > '2019-12-25 12:00:00' and created_date < '2020-06-05 18:00:00';

-- Get only specific number of meals fx return only 5 meals
select * from meal
order by id desc
limit 4;

-- Get the meals that have good reviews
 
select meal.id, meal.title, review.meal_id, review.stars
from meal 
inner join review on meal.id = review.meal_id
where review. stars > 3;

-- Get reservations for a specific meal sorted by created_date
   
select * 
from reservation
INNER JOIN meal
ON reservation.created_date = meal.created_date
ORDER BY title;

-- another way by taking exact meal.id
select number_of_guests, meal.title, meal.id, reservation.created_date 
from meal
join reservation on meal.id = reservation.meal_id
where reservation.meal_id = 3
order by reservation.created_date; 

-- Sort all meals by average number of stars in the reviews
select avg(review.stars) as review_stars, meal.title
from meal
join review on meal.id = review.meal_id
group by meal.title
order by review_stars;

SELECT *,AVG(review.stars)
FROM meal
INNER JOIN review
ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY AVG(review.stars);














