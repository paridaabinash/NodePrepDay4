import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'
function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange1 = (e) => {
    setEmail(e.target.value);
  };
  const handleChange2 = (e) => {
    setPassword(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const data={
      'email':email,
      'password':password
    }
   axios.post('http://localhost:4004/login',data).then((response)=>{
    response.data.log?console.log('logged-in'):console.log('wrong-credentials')
   }).catch((err)=>{
    console.log(err)
   })
    console.log(email, password);
  };
  return (
    <div className="loginform w-50 m-auto border border-primary p-4 bg-info">
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange1}
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange2}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handlesubmit}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Loginform;
