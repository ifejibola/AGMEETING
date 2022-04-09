# AGMEETING

NPM Version : 12.18.2

# Installation

npm install

# Starting and running database
*Make sure you have postgreSQL installed, PgAdmin 4 is recommened to install to keep track of the database

Please follow these steps:
```
cd server
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
# Starting/Running App:
```
npm run dev:build-client

npm run dev:start
```
# Functionalities

- Users will be directed to login page and can register in signup page if not registered.
- Users, Moderator, Admin can upload file in Vault tab.
- Admin can control users in Users tab:
  - See all users in Registered Users tab
  - Update users by clicking pencil icon in Action column in Registered Users tab
  - Add new users in Add User tab 


Supervisor: Ife Ajibola – ife@ncra.ca
 
