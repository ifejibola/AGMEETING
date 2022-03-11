
Create table Administrator(
adminId INT GENERATED ALWAYS AS IDENTITY,
email VARCHAR(100),
password VARCHAR(100),
PRIMARY KEY (adminId)
);

Create table Moderator(
modId INT GENERATED ALWAYS AS IDENTITY,
email VARCHAR(100),
password VARCHAR(100),
PRIMARY KEY (modId)
);

Create table Meeting(
meetingId INT GENERATED ALWAYS AS IDENTITY,
modId INT, 
adminId INT,

PRIMARY KEY(meetingId),
FOREIGN KEY (modId) REFERENCES Moderator(modId),
FOREIGN KEY (adminId) REFERENCES Administrator(adminId)
);

Create table Participant(
meetingId INT,
email VARCHAR(100),
password VARCHAR(100),
FOREIGN KEY (meetingId) REFERENCES Meeting(meetingId)
);


Create table Item(
meetingId INT, 
issuenumber INT, 
description VARCHAR(2000),
filepath VARCHAR(300),
votesFor INT, 
votesAgainst INT, 
abstain INT,
FOREIGN KEY (meetingId) REFERENCES Meeting(meetingId)
);
