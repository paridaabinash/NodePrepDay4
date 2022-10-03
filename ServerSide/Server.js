const express = require("express");
const app = express();
const port = 4004 || process.env.PORT;
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
let LoginRoute= require('./Route/Login');
let Registerroute= require('./Route/Register');
// Set up Global configuration access
dotenv.config();

app.use(bodyparser.json());
app.use(cors());

app.use('/login',LoginRoute)
app.use('/register',Registerroute)

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
