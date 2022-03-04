
CREATE TABLE Administrator(
id INT GENERATED ALWAYS AS IDENTITY,
email VARCHAR(100),
password VARCHAR(100),
PRIMARY KEY (id)
);


CREATE TABLE Participant(
id INT GENERATED ALWAYS AS IDENTITY,
meetingId INT,
email VARCHAR(100),
password VARCHAR(100),
isMod BOOLEAN,

PRIMARY KEY(id)
);

CREATE TABLE Meeting(
id INT GENERATED ALWAYS AS IDENTITY,
modId INT, 
adminId INT,

PRIMARY KEY(id),
FOREIGN KEY (modId) REFERENCES Participant(id),
FOREIGN KEY (adminId) REFERENCES Administrator(id)
);

CREATE TABLE Item(
id INT GENERATED ALWAYS AS IDENTITY,
meetingId INT, 
issuenumber INT, 
description VARCHAR(2000),
filepath VARCHAR(300),
votesFor INT, 
votesAgainst INT, 
abstain INT,

PRIMARY KEY(id),
FOREIGN KEY (meetingId) REFERENCES Meeting(id)
);

ALTER TABLE Participant ADD CONSTRAINT fk1
   FOREIGN KEY (meetingId) REFERENCES Meeting (id);