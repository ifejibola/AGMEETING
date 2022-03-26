
CREATE TABLE Administrator(
id INT GENERATED ALWAYS AS IDENTITY,
email VARCHAR(100),
password VARCHAR(100),
PRIMARY KEY (id)
);


CREATE TABLE Participant(
id INT GENERATED ALWAYS AS IDENTITY,
meeting_id INT,
email VARCHAR(100),
password VARCHAR(100),
is_mod BOOLEAN,
moderator_id INT, 
PRIMARY KEY(id)
);

CREATE TABLE Meeting(
id INT GENERATED ALWAYS AS IDENTITY,
mod_id INT, 
admin_id INT,

PRIMARY KEY(id),
FOREIGN KEY (mod_id) REFERENCES Participant(id),
FOREIGN KEY (admin_id) REFERENCES Administrator(id)
);

CREATE TABLE Item(
id INT GENERATED ALWAYS AS IDENTITY,
meeting_id INT, 
issue_number INT, 
description VARCHAR(2000),
filepath VARCHAR(300),
votes_for INT, 
votes_against INT, 
abstain INT,

PRIMARY KEY(id),
FOREIGN KEY (meeting_id) REFERENCES Meeting(id)
);

ALTER TABLE Participant ADD CONSTRAINT fk1
   FOREIGN KEY (meeting_id) REFERENCES Meeting(id);