# News Feed Finametrix

### Steps to Run on Docker

1. Clone this repository

   > git clone https://github.com/hermanu/finametrix-app

2. Navigate into the directory

   > cd finametrix-app

3. Create a .env file in the Server folder and add MONGODB_URI=mongodb://mongo:27017/finametrix

   > touch ./server/.env

4. Add MONGODB_URI param to ./server/.env file

   > MONGODB_URI=mongodb://mongo:27017/finametrix

5. Build up Docker Images and rund the stack

   > docker compose up

Your app should be running on (if using native docker).:

React-App is running on [http://localhost:3000](http://localhost:3000)

Be patient and wait for all for all of the NPM warnings to finish.

### Steps to Run local

1. Clone this repository

   > git clone https://github.com/hermanu/finametrix-app

2. Navigate into the directory

   > cd finametrix-app

3. Create a .env file

   > touch .env

4. Add MONGODB_URI param to .env file

   > MONGODB_URI=mongodb://localhost:27017/finametrix

5. Run mern script to start client and server

   > yarn run mern

NodeJs server is running on [http://localhost:5000/api/v1](http://localhost:5000/api/v1)

React-App is running on [http://localhost:3000](http://localhost:3000)

### Anotaciones
