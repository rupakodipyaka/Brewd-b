import React, { Component } from 'react';
import './App.css';
import './styles.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { ListGroup, ListGroupItem, Card, Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class App extends Component {
  state = {
    response: []
  };

  render() {
    var brewd = this.state.response;
    brewd = brewd.map(function(brewd, index){
    return(
          <ListGroupItem color="success" key={index}>
            <span className="name">{brewd.cafeName}</span>
          </ListGroupItem>);
    });

    var loc = this.state.response;
    loc = loc.map(function(loc, index){
    return(
      <Marker
        position={{lat: loc.lat, lng: loc.lng}}
      key={index}/>
    );
    });

    return (
      <div id="SC" className="search-cafe">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
        <Container className="search-cafe-container">
          <Card className="search-cafe-card">
            <Row>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Row>
          <Col sm={{ size: 2, offset: 3}}>
            <Input type="select" innerRef={(coff) => (this.coff= coff)}>
              <option value="roaster1">Roaster 1</option>
              <option value="roaster2">Roaster 2</option>
            </Input>
            </Col>
            <Col xs="2">
            <Input  type="select" innerRef={(milk) => (this.milk= milk)}>
              <option value="milk1">Milk 1</option>
              <option value="milk2">Milk 2</option>
            </Input>
          </Col>
            <Col xs="2">
              <Button color="success" block type="submit">Find Cafes</Button>
              </Col>
              </Row>
          </Form>
  </Row>
  <Row className="row2">
          <Col>
          <ListGroup>{brewd}</ListGroup>
          </Col>
        </Row>
        <Row className="row2">
          <Col>
        <Map style={{width: "97%"}}google={this.props.google}
          center={{lat: -37.82, lng: 144.95}}
          zoom={12}>
          {loc}
        </Map>
        </Col>
        </Row>
        </Card>
        </Container>
      </div></div></div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    var coff = this.coff.value;
    var milk = this.milk.value;
    fetch('/api/brewd?coff='+coff+'&milk='+milk).then(function(data){
      return data.json();
    }).then(res => {this.setState({ response: res });console.log(res);})
    .catch(err => console.log(err));
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD9JHkbadijmTIImbs3SMTsMvte7bkBFaE")
})(App)
