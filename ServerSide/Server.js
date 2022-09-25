const express = require("express");
const app = express();
const port = 4004 || process.env.PORT;
const bodyparser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
let userData = require("./UserData");

// Set up Global configuration access
dotenv.config();

app.use(bodyparser.json());
app.use(cors());
console.log(userData);


app.post("/register", (req, res) => {
  const { name, phone, email, password } = req.body;
  console.log(name, phone, email, password);
  const hashing = async () => {
    // console.log(password)
    const hash = await bcrypt.hash(password, 10);
    // console.log(hash);
    userData.push({ email: email, password: hash });
    // const pass = "catsaresmart123";
    // const verify = await bcrypt.compare(pass,hash)
    // console.log(verify)
  };
  hashing();

  // res.write('Hi')
  res.sendStatus(200);
  res.end();
});

app.post("/login", (req, res) => {
  // console.log(req.body)
  const { email, password } = req.body;

  userData.email === email
    ? res.status(200).send("User successfully registered")
    : res.status(404).send("User has not registered, please try again");

//   const jsonweb = () => {
    // let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let secretkey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        id: "1233432534daw",
      },
      secretkey
    );
    res.send(token)
    console.log(token);

    // const verify =jwt.verify(token, secretkey);
    // (verify)? res.send("Successfully verified"): res.status(401).send('Error')
//   };

  jsonweb();
//   res.end();
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
