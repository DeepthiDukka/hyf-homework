USE hyf_lesson1;

-- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
INSERT INTO task(
title,
description,
created,
updated,
due_date,
status_Id,
user_Id
) 
VALUES (
'lesson2 homework', 
'completed and submited it', 
NOW(), 
NOW(),
'2020-05-27 21:00:00',
3, 
10);

-- Statement to confirm the above attributes are added;
select * from task;

-- Change the title of a task with these attributes: taskID, newTitle
UPDATE task 
SET title = 'change task name'
WHERE id = 25;

-- Change the task due date with these attributes: taskID, newDueDate
UPDATE task
SET due_date = '2019-12-02 12:00:00'
WHERE id = 33;

-- Change the task status with these attributes: taskID, newStatus
UPDATE task
SET status_id = 1
WHERE id = 29;

-- Mark a task as complete with this attribute: taskID
UPDATE task
SET status_id = 3
WHERE id = 23;

-- Delete task with this attribute: taskID
DELETE FROM task
WHERE id = 30;

