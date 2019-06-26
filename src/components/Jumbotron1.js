import React, {Component} from '../../node_modules/react';
import './jumbotron.css';
import {Button, Jumbotron} from '../../node_modules/reactstrap/lib';
import image from '../assets/SeekPng.png'

class Jumbotron1 extends Component {
    render(){
        return(
            
            <div className="jumbotron">
            <Jumbotron>
                <img src={image} alt="Walt Disney"></img>
                <h1 className="display-4">Welcome to Disney Parents</h1>
                {this.props.loginForm ? 
                    <Button onClick={this.props.toggle} className="btn btn-lg btn-red">Sign Up</Button>
                        :
                    <Button onClick={this.props.toggle} className="btn btn-lg btn-red">Sign In</Button>}
            </Jumbotron>
            </ div>
            
        
            
        )
    }
}

export default Jumbotron1