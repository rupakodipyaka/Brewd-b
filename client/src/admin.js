import React, { Component } from 'react';
import { Card, Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    postData(`/api/brewd`, {cafeName: this.cafe.value, coffeeRoaster: this.coffee.value, milkBrand: this.milk.value, lat: this.lat.value, lng: this.lng.value, address: this.add.value, suburb: this.sub.value, city: this.city.value})
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
      <div className="admin">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <Container>
      <Card className="adminform">
      <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Cafe Name</Label>
              <Input innerRef={(cafe) => (this.cafe= cafe)} placeholder="Enter Cafe Name" />
            </FormGroup>
            <FormGroup>
              <Label>Cofee Roaster</Label>
              <Input innerRef={(coffee) => (this.coffee= coffee)} placeholder="Enter Coffee Roaster" />
            </FormGroup>
        <FormGroup>
          <Label>Milk Brand</Label>
          <Input innerRef={(milk) => (this.milk= milk)} placeholder="Enter Milk Brand"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Latitude</Label>
              <Input innerRef={(lat) => (this.lat= lat)} placeholder="Enter Latitude" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Longitude</Label>
              <Input innerRef={(lng) => (this.lng= lng)} placeholder="Enter Longitude" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Address</Label>
          <Input innerRef={(add) => (this.add=add)} placeholder="Enter Cafe Address"/>
        </FormGroup>
        <FormGroup>
          <Label>Suburb</Label>
          <Input innerRef={(sub) => (this.sub=sub)} placeholder="Enter Suburb Name"/>
        </FormGroup>
        <FormGroup>
      <Label>City</Label>
      <Input type="select" innerRef={(city) => (this.city=city)}>
        <option value="melbourne">Melbourne</option>
        <option value="sydney">Sydney</option>
        <option value="brisbane">Brisbane</option>
        <option value="canberra">Canberra</option>
        <option value="perth">Perth</option>
      </Input>
    </FormGroup>
        <Button className="butt">Submit</Button>
      </Form>
    </Card>
    </Container>
      </div></div></div>
    );
  }
}
export default Admin;
