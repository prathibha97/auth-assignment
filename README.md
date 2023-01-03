# Authentication Assignment


## Getting Started

1. Ensure you have Node.js installed.
2. Create a free [Mongo Atlas](https://www.mongodb.com/atlas/database) database online or start a local MongoDB database.
3. Create a `server/.env` file with a `MONGO_URI` property set to your MongoDB connection string.
4. In the terminal, run: `npm install`

## Running the Project

1. In the terminal, run: `npm run deploy`
2. Browse to the application at [localhost:5000](http://localhost:5000)
3. Use default email - john@example.com, password - '123456' 

## Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t auth-project .`
3. Run `docker run -it -p 5000:5000 auth-project`

## Running the Tests

To run any automated tests, run `npm test`. This will: 
* Run all the client-side tests: `npm test --prefix client`
* Run all the server-side tests: `npm test --prefix server` 
