CREATE TABLE Cars(
       id INT PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(60),
       createdAt DATE,
       updatedAt DATE,
       deletedAt DATE
);

CREATE TABLE Offices(
       id INT PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(60),
       location VARCHAR(60),
       createdAt DATE,
       updatedAt DATE,
       deletedAt DATE
);

INSERT INTO Cars(
       name,
       createdAt,
       updatedAt,
       deletedAt)
VALUES(
       "escort",
        null,
        null,
        null
);

INSERT INTO Offices(
       name,
       location,
       createdAt,
       updatedAt,
       deletedAt)
VALUES(
       "Office A",
        "Berlin",
        null,
        null,
        null
);

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;