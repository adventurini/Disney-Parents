import React, {Component} from '../../node_modules/react';
import {Redirect} from '../../node_modules/react-router-dom';
import Login from './Login'

export default class Home extends Component {

  render(){
      return(
          <div>
              {localStorage.getItem('token') ? (<Redirect to={{pathname: '/Posts'}} />) : (<Login />)}
          </div>
      )
  }

}