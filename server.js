const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const DB_name = "JokesDB";

app.use(cors());
app.use(express.json());

//this line of code initializes our DB connection with mongoose.connect

require("./server/config/mongoose.config.js");

// this will import our jokes route function from jokes.routes.jsx

const AllDaJokesRoutes = require("./server/routes/jokes.route.js")(app);

//this will import our config route function from config

const DBconnection = require("./server/config/mongoose.config.js")(DB_name);

//now calling the port to listen and pay attention to what we will be sending over
app.listen(port, () =>
  console.log(`server ready is good to go on port ${port}`)
);
