-- Part 3: More queries
USE hyf_lesson2;

-- 3.1 Get all the tasks assigned to users whose email ends in @spotify.com
SELECT t.id, t.title, t.description, t.created, t.updated, t.due_date, t.status_id 
FROM user_task ut 
INNER JOIN task t ON ut.task_id=t.id 
WHERE ut.user_id = (
    SELECT id
    FROM user 
    WHERE email LIKE '%@spotify.com'
);

-- 2. Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT t.title
FROM task t
INNER JOIN user_task ut ON t.id = ut.task_id
INNER JOIN status s ON t.status_id = s.id 
WHERE ut.user_id = (
    SELECT id 
    FROM user
    WHERE name = 'Donald Duck'
)
AND s.id = (
    SELECT id
    from status
    WHERE name = 'Not started'
);	

-- 3. Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT *
FROM user
JOIN user_task ON user.id = user_task.user_id 
JOIN task ON user_task.task_id = task.id 
WHERE user.name = 'Maryrose Meadows' AND month(created) = 09;

-- 4 Find how many tasks were created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT  month(t.created) AS month_created, COUNT(*) AS task_count 
from task t 
GROUP BY month(t.created)
ORDER BY month(t.created) ASC;


