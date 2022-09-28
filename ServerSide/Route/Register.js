let RegisterRouter = require("express").Router();
const bcrypt = require("bcrypt");
let userData = [];
RegisterRouter.post("/registerData", async(req, res) => {
  const { name, phone, email, password } = req.body;
  let user = userData.find((user) => {
    return user.email == email;
  });
  if (user) {
    res.status(400).json({ 'Error': [{ message: "Already exist" }] });
  }
  else if(!user){
    res.status(200).json({
      'Response':[{'message':'Registration successful'}]
    })
  }
  bcrypt.hash(password, 12,(err,hashPassword)=>{
    if(err){
      return res.status(400).json({error:err})
    }
    else{
      userData.push({name,phone,email,password:hashPassword})
    }
  })
  // const hashing = async () => {
  //   //   console.log(password)
  //   const hash = await bcrypt.hash(password, 10, (err, hashpassword) => {
  //     err ? res.send(401).status(401) : res.send(hashpassword).status(200);
  //   });
    // console.log(hash)

    //   };
    //   console.log(hash);
    //   userData.push({ email: email, password: hash });
    // const pass = "catsaresmart123";
    // const verify = await bcrypt.compare(pass,hash)
    // console.log(verify)
  // };

  res.end();
});
RegisterRouter.get('/')
module.exports = RegisterRouter;
