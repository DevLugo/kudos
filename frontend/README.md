# 
## Author
**Rodolfo Lugo**  [linkedin]

## Finished Features
- db migrations and seeder script for random users/companies/kudos asignation
- graphql api
- login/auth page
- dashboard Page
    -   List of asigned kudos and option to send the kudo
    -   list of received kudos

## Pending Features
- front and backend tests
- cron to asign the kudos every week
- better session management (the token is not removed from localstorage when the time expired)
- improve the UI and create slice for each group of actions

## Main Requirements
These are the core dependencies. With yarn you will install the rest of dependencies
- [yarn] - Yarn is a package manager that doubles down as project manager.
- [node.js] - recomended version: 16.13
- [postgres] - you must create a db with the following name: kudos_db

## Instructions
- the users/companies/asignedKudos are generated dynamically by the api/prisma/seed.ts file
- You can access  with:
    -username: test0_0@test.com
    -password: 1234
- You can Send the kudo with the "send" button(validation pending in text input required)
- To test if the kudo was sent successfully,  login in with the email of the person that you sent the kudo. (the password is the same for all the users)

## DB configuration
The db must to be postgrest
1.- Create a db with the following name "kudos_db"
2.- You must update the follwing file: **kudos/api/.env**
3.- Update the connection string stored on **DATABASE_URL**, example
postgresql://**{username}**:**{password}**@**{dbhost:dbport}**/**{db_name}**?schema=public

## Install with yarn API
```sh
cd kudos/api
yarn
yarn db:deploy
yarn db:generate
yarn db:seed
yarn start:dev
```

## Install with npm API
```sh
cd kudos/api
npm install
npm run db:deploy
npm run db:generate
npm run db:seed
npm run db:dev
```
The api must be visible on http://localhost:4000/graphql

## Install with yarn FRONTEND
```sh
cd kudos/frontend
yarn
yarn start
```
The api must be visible on http://localhost:3000

## Install with npm FRONTEND
```sh
cd kudos/frontend
npm install
npm run start
```
   [node.js]: <http://nodejs.org>
   [yarn]: <https://yarnpkg.com/>
   [linkedin]: <https://www.linkedin.com/in/rodolfo-lugo/>
   