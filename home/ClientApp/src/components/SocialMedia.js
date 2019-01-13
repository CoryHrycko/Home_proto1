
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Well, Row, Col } from 'react-bootstrap';


export class SocialMedia extends Component {
  displayName = SocialMedia.name

  render() {
    return (
      <div className="">
        <h1>Cory's App!</h1>
        <Well>
          <h3> Navigate your world</h3>
        <ListGroup>
        <ListGroupItem action href="https://facebook.com"> Facebook Link</ListGroupItem>
        <ListGroupItem action href="https://twitter.com">Twitter</ListGroupItem>
        <ListGroupItem action href="https://www.weather.gov">Weather</ListGroupItem>
        </ListGroup>
        </Well>
      </div>
    );
  }
}
