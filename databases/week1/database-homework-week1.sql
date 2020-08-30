
SHOW DATABASES;
USE hyf_lesson1;
-- 1.Find out how many tasks are in the task table
select count(id) from task;

-- 2.Find out how many tasks in the task table do not have a valid due date
select count(id)
from task 
where due_date is NULL;

-- 3.Find all the tasks that are marked as done
select status.name, task.title
from task inner join status on status.id = task.status_id 
where status.name = 'done';

-- 4. Find all the tasks that are not marked as done
select status.name, task.title 
from task inner join status on status.id = task.status_id 
where status.name != 'done';

-- 5. Get all the tasks, sorted with the most recently created first
select title, created 
from task 
order by created desc;

-- 6. Get the single most recently created task
select title,created 
from task 
order by created desc 
limit 1;

-- 7.Get the title and due date of all tasks where the title or description contains database
select title, due_date 
from task 
where title LIKE '%database%' or description LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
select task.title, status.name
from task 
inner join status on status.id = task.status_id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
select status.name as status, count(task.id)
from task 
inner join status on status.id = task.status_id
group by status.id;

-- 10. Get the names of all statuses, sorted by the status with most tasks first
select status.name as status, count(task.id) 
from task
inner join status on status.id = task.status_id
group by status.id
order by count(task.id) desc;