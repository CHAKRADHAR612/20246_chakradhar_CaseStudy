CREATE DATABASE Casestudy;
USE CaseStudy;
SHOW TABLES;
DESCRIBE TASK;
DESCRIBE USER;
CREATE TABLE Task(
	task_Id INT PRIMARY KEY AUTO_INCREMENT,
    owner_Id INT,
    creator_Id INT,
    name VARCHAR(30),
    description VARCHAR(100),
    status VARCHAR(15),
    priority VARCHAR(15),
    notes VARCHAR(250),
    is_Bookmarked BOOLEAN,
    created_On DATETIME,
    status_Changed_On DATETIME
);
ALTER TABLE Task
ADD COLUMN email VARCHAR(30);
UPDATE Task
SET owner_id=10000 
WHERE task_Id=100;
DESCRIBE TASK;
DESCRIBE User;
DELETE FROM User WHERE user_id=10003;
ALTER TABLE Task AUTO_INCREMENT=100;
ALTER TABLE User AUTO_INCREMENT=10003;
INSERT INTO Task VALUES(1,1,'SQL Training','learning JDBC connectivity','new','high','we have to use JDBC driver',true,'2021-08-20 10:32:30','2021-08-20 10:32:30');
INSERT INTO Task (owner_id,creator_id,name,description,status,priority,is_Bookmarked,created_On)VALUES(10001,123,'SQL Training','Configuring mysql with spring','New','High',true,NOW());
INSERT INTO Task (owner_id,creator_id,name,description,status,priority,is_Bookmarked,created_On)VALUES(10001,131,'JDBC Training','Configuring Conneciton in JDBC','New','medium',false,'2021-08-31 09:22:30');
INSERT INTO Task (owner_id,creator_id,name,description,status,priority,is_Bookmarked,created_On)VALUES(10000,153,'Angular training','Angular installation and how to work','New','High',false,NOW());
SELECT * FROM Task;
CREATE TABLE User(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(30),
    password VARCHAR(30),
    email VARCHAR(30),
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    mobile_no VARCHAR(13),
    role VARCHAR(20),
    dob DATE,
    created_on DATETIME 
);

SELECT * FROM Task;
SELECT * FROM user;
