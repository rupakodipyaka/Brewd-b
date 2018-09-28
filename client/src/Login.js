import React, { Component } from 'react';
import { Card, Container, Row, Col, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends Component {
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
      <div  id="RU" className="user-signup" >
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
      <Container>
        <Row>
          <Col>
            <Card>

      <Form className="loginform" onSubmit={this.handleSubmit}>
        <Row>
          <Col sm={{ size: 4, offset: 4 }}>
            <br/>
            <p className="lead">Enter Credentials to Log In</p>
            <Jumbotron>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
        </FormGroup>
        </Jumbotron>
        <Button block href="#SC" color="success">Login</Button>
        <br/>
      </Col>
      </Row>
      </Form>
      </Card>
      </Col>
      </Row>
      </Container>
      </div>
    </div>
</div>
    );
  }
}

export default Login;
