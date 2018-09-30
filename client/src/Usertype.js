import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Usertype extends Component {
  render() {
    return (
      <div className="user-type">
        <div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
        <Container>
          <Row>
            <Col>
        <Jumbotron className="jumbo jumbo_text">
        <h1 className="display-3">Brewd!</h1>
        <hr className="my-2" />
        <p>Please Confirm.</p>
          <Row>
          <Col sm={{ size: 3, offset: 3 }}><Link to="/signup" style={{ textDecoration: 'none' }}><Button size="lg" block className="butt">New User</Button></Link></Col>
          <Col sm={{ size: 3}}><Link to="/login" style={{ textDecoration: 'none' }}><Button size="lg" block className="butt">Registered User</Button></Link></Col>
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
