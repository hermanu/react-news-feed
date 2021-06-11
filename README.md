# News Feed Finametrix

### Steps to Run on Docker

1. Clone this repository

   > git clone https://github.com/hermanu/react-news-feed finametrix-app

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

   > git clone https://github.com/hermanu/react-news-feed finametrix-app

2. Navigate into the directory

   > cd finametrix-app

3. Create a .env file

   > touch .env.dev

4. Add MONGODB_URI param to .env file

   > MONGODB_URI=mongodb://localhost:27017/finametrix

5. Run mern script to start client and server

   > yarn run mern

NodeJs server is running on [http://localhost:5000/api/v1](http://localhost:5000/api/v1)

React-App is running on [http://localhost:3000](http://localhost:3000)

### Anotaciones

- Para realizar este proyecto utilize un boilerplate con lo minimo posible, ya que nunca habia trabajado con React anteriormente. Aun asi, he tenido que implementar un router y un context.
- No estoy seguro que la forma correcta de hacerlo sea la que yo he utilizado, seguramente se pueda hacer todo con una peticion para recibir el listado de feeds y luego filtrarlos segun la vista en la que nos encontremos.
- He intentado separar los componentes lo maximo posible, y luego el componente de la lista en las 2 vistas.
- Solo he implementado los test de integracion (endpoints), los unitarios me estan dando muchos problemas con Jest. Hablando de Jest, tengo que utilizar el parametro --forceExit, por que no encuentro la forma de cerrar la conexion con mongo una vez se deja de utilizar.
- Respecto a docker.compose.yml he tenido que buscar algunos ejemplos y sacar lo mejor de cada uno de ellos ya que me estaba resultando imposible montar la network necesaria (aun sigo retocando la config)
