import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

class Usertype extends Component {
  render() {
    return (
      <div className="user-type">
        <div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
        <Container>
          <Row>
            <Col>
        <Jumbotron>
        <h1 className="display-3">Brewd!</h1>
        <p className="lead">Select Coffee that you like.</p>
        <hr className="my-2" />
        <p>Please Confirm.</p>
          <Row>
          <Col sm={{ size: 3, offset: 3 }}><Button size="lg" block href="#NU" color="success">New User</Button></Col>
          <Col sm={{ size: 3}}><Button size="lg" block href="#RU" color="success">Registered User</Button></Col>
          </Row>
      </Jumbotron>
      </Col>
      </Row>
      </Container>
      </div></div></div>
    );
  }
}

export default Usertype;
