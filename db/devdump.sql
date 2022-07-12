CREATE TABLE Cars(
       id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(255) NOT NULL,
       createdAt DATETIME NOT NULL,
       updatedAt DATETIME NOT NULL,
       deletedAt DATETIME
);

CREATE TABLE Offices(
       id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(255) NOT NULL,
       location VARCHAR(255) NOT NULL,
       createdAt DATETIME NOT NULL,
       updatedAt DATETIME NOT NULL,
       deletedAt DATETIME
);

CREATE TABLE `UserCars` (
    `id` INTEGER UNSIGNED auto_increment ,
    `CarId` INTEGER UNSIGNED,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    `deletedAt` DATETIME, PRIMARY KEY (`id`),
    FOREIGN KEY (`CarId`) REFERENCES `Cars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

INSERT INTO Offices(
       name,
       location,
       createdAt,
       updatedAt,
       deletedAt)
VALUES(
       "Office A",
        "Berlin",
        CAST(N'2012-06-18 10:34:09.000' AS DateTime),
        CAST(N'2012-06-18 10:34:09.000' AS DateTime),
        null
);

CREATE TABLE `UserOffices` (
    `id` INTEGER UNSIGNED auto_increment ,
    `OfficeId` INTEGER UNSIGNED,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    `deletedAt` DATETIME,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`OfficeId`)
    REFERENCES `Offices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

INSERT INTO Cars(
       name,
       createdAt,
       updatedAt,
       deletedAt)
VALUES(
       "Car 1",
        CAST(N'2012-06-18 10:34:09.000' AS DateTime),
        CAST(N'2012-06-18 10:34:09.000' AS DateTime),
        null
);

INSERT INTO UserCars(
       CarId,
       createdAt,
       updatedAt,
       deletedAt)
VALUES(
        1,
        CAST(N'2012-06-18 10:34:09.000' AS DateTime),
        CAST(N'2012-06-18 10:34:09.000' AS DateTime),
        null
);

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;