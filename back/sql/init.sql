CREATE DATABASE IF NOT EXISTS dojo_api_redux CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'dojoapiredux'@'localhost' IDENTIFIED BY 'dojoapiredux';
GRANT ALL PRIVILEGES ON dojo_api_redux.* to 'dojoapiredux'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS dojo_api_redux.user (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(128),
  lastname VARCHAR(128),
  gender VARCHAR(10) NULL,
  avatar VARCHAR(128) NULL
);

INSERT INTO `user` (`id`, `firstname`, `lastname`, `gender`, `avatar`) VALUES
(1, 'Sophia', 'Deschamps', 'female', 'https://randomuser.me/api/portraits/women/93.jpg'),
(2, 'Louis', 'Martinez', 'male', 'https://randomuser.me/api/portraits/men/3.jpg'),
(3, 'Lana', 'Martin', 'female', 'https://randomuser.me/api/portraits/women/47.jpg'),
(4, 'Louise', 'Fabre', 'female', 'https://randomuser.me/api/portraits/women/38.jpg'),
(5, 'Emmie', 'Adam', 'female', 'https://randomuser.me/api/portraits/women/88.jpg'),
(6, 'Eloane', 'Vidal', 'female', 'https://randomuser.me/api/portraits/women/65.jpg'),
(7, 'Emile', 'Nicolas', 'male', 'https://randomuser.me/api/portraits/men/97.jpg'),
(8, 'Mae', 'Masson', 'male', 'https://randomuser.me/api/portraits/men/92.jpg'),
(9, 'Lya', 'Aubert', 'female', 'https://randomuser.me/api/portraits/women/15.jpg'),
(10, 'Lucy', 'Fontai', 'female', 'https://randomuser.me/api/portraits/women/59.jpg');
