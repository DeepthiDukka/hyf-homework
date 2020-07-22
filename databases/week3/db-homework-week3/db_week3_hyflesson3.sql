CREATE DATABASE meals_share;
USE meals_share;
SET NAMES utf8mb4;

-- for reference used the below commands to delete the table and created again.
DROP table `meal`;
DROP table `review`;
DROP table `reservation`;


CREATE table `meal` (
	  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	  `title` varchar(255) NOT NULL,
	  `description` text NULL default NULL,
	  `location` varchar(255) NULL, 
	  `when` DATETIME NOT NULL,
	  `max_reservations` int(10) unsigned NOT NULL,
	  `price` decimal(13, 4) NOT NULL,
	  `created_date` DATETIME NOT NULL DEFAULT NOW()
	  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      
    show tables;  
      CREATE table `reservation` (
		`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
		`number_of_guests` int(10) unsigned NOT NULL,
		`meal_id` int(10) unsigned NOT NULL,
	    `created_date` DATETIME NOT NULL DEFAULT NOW(),
		CONSTRAINT `fk_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;	
        
        CREATE table `review` (
		`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
		`title` varchar(255) NOT NULL,
		`description` text NULL default NULL,
		`meal_id` int(10) unsigned NOT NULL,
        `stars` int(10) unsigned NOT NULL,
	    `created_date` DATETIME NOT NULL DEFAULT NOW(),
	    CONSTRAINT `fk_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        