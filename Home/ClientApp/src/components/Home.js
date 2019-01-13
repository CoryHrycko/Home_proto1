import React, { Component } from 'react';
import { Button } from 'react-bootstrap';




export class Welcome extends Component {
  displayName = Welcome.name

  render() {
    return (
      <div>
        <h1>{this.displayName}</h1>
        <p>Welcome Cory</p>
{/*  */}
        <strong><em> Today's Date.</em></strong>
 {/*  */}
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
{/*  */}
        <div>
          <Button bsStyle="secondary">Primary</Button>
        </div>
      </div>
    );
  }
}
