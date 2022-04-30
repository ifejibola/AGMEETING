# AGMEETING

NPM Version : 12.18.2

# Installation
```
npm install
```
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
npm run dev:chat
npm run dev:start
```
# Functionalities

## Sign in and sign up
- Users will be directed to login page and can register in signup page if not registered.
## User management (only for admin):
- Admin can control users in Users tab:
  - See all users in Registered Users tab
  - Update users by clicking pencil icon in Action column in Registered Users tab
  - Add new users in Add User tab
## File management:
- Moderator can upload file into the vault
- All users download files 
## Chat room system:
- Admin can create multiple chatrooms
- Other users can join the chatrooms that admin create and start real-time conversation
## Meeting management:
- Admin can create meeting and assign moderator to the meeting
- Other users can join the meeting 


Supervisor: Ife Ajibola – ife@ncra.ca
 
