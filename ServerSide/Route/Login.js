let router = require("express").Router();
const bcrypt = require("bcrypt");
const jwtToken = require("jsonwebtoken");

let userData = [
  {
    name: "naveen",
    phone: "7595932156",
    email: "naveen@gmail.com",
    password: "naveen@123",
  },
];
router.get("/login", (req, res) => {
  res.send("HI");
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  let user = userData.find((user) => {
    return user.email == email;
  });
  if (!user) {
    return res.status(400).json({ message: "invalid email" });
  } else {
    let match_password = bcrypt.compare(password, user.password);
    if (!match_password) {
      return res.status(400).json({ message: "Wrong password" });
    } else {
      return res.status(200).json({ message: "Login successfully" });
    }
  }
});

router.get("/api", (req, res) => {
  const token = jwtToken.sign("email", "gfg_token_header_key");
  res.json({
    token,
  });
});

module.exports = router;
