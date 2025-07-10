Use Reparte;

CREATE TABLE `users`(
    `id` INT(8) ZEROFILL UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`name`, `email`, `password`) VALUES
('Bianca Araujo Coelho', 'biancacoelho242005@gmail.com', '148663')

SELECT * FROM `users`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `documents` (
  `user_id` INT NOT NULL,

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

