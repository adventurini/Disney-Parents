import React, { Component } from '../../node_modules/react';
import {Jumbotron, Button} from '../../node_modules/reactstrap/lib';
import './pageheader.css';
import {Link} from '../../node_modules/react-router-dom'
 
export default class PageHeader extends Component {
  render() {
    return (
      <div>
      <Jumbotron className="light-blue">
        <h1 className="display-3 white">Welcome to Disney Parents!</h1>
        <p className="lead white">The app that lets YOU enjoy your vacation TOO</p>
        <p>We watch. While you ride.</p>
        <p className="lead white">
          <Link to='/request'><Button className="red" color="primary">Add a Request</Button></Link>
        </p>
      </Jumbotron>
      </div>
    )
  }
}
