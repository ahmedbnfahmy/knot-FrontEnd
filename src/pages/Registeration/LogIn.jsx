
import React, {  useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



function Login() {
    // const [userName,isuserName]=useState(false)
   
  const [isValid, setIsValid] = useState(false);
  const validate = (e) => {
    console.log(e.target.value);
    
    if (e.target.value.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    console.log(isValid);
  };
  
    return (
    <div>
        <div className="container my-4">
    <p className="h1 text-center">Login First </p>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <br></br>
        <Form.Text
          className="text-danger"
          style={{ display: isValid ? "none" : "" }}
        >
        </Form.Text>
        <Form.Control
          type="password"
          placeholder="Password"
          required
          onBlur={validate}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={isValid ? false : true}
      >
        Submit
      </Button>
    </Form>
  </div>
</div>
  )
}

export default Login