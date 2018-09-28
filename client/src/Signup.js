import React, { Component } from 'react';
import { Card, Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';



class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    postData(`/api/brewd`, {cafeName: "Hammad", coffeeRoaster: "7eleven", milkBrand: "nestle", lat: "-37.8", lng: "144.8"})
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = ``, data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}
  }

  render() {
    return (
      <div id="NU" className="user-signup">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <Container>
      <Card className="signupform">
      <Form onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>First Name</Label>
              <Input name="firstname" id="firstName" placeholder="Enter First Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Last Name</Label>
              <Input name="lastname" id="lastName" placeholder="Enter Last Name" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Email</Label>
          <Input type="text" name="email" id="Email" placeholder="abc@gmail.com"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Choose Password</Label>
              <Input type="password" name="password" id="Password" placeholder="Enter password" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input type="password" name="confirmpassword" id="confirmPassword" placeholder="Confirm password" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
          <Label>City</Label>
          <Input type="select" name="select1" id="exampleSelect1">
            <option>Melbourne</option>
            <option>Sydney</option>
            <option>Brisbane</option>
            <option>Canberra</option>
            <option>Perth</option>
          </Input>
        </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
          <Label>State</Label>
          <Input type="select" name="select2" id="exampleSelect2">
            <option>VIC</option>
            <option>NSW</option>
            <option>QLD</option>
            <option>ACT</option>
            <option>WA</option>
          </Input>
        </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Mobile No.</Label>
          <Input type="text" name="mobileno" id="mobileNo" placeholder="0123456789"/>
        </FormGroup>
        <Button href="#RU" color="success">Sign Up</Button>
      </Form>
    </Card>
    </Container>
      </div></div></div>
    );
  }
}
export default Signup;
