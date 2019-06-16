import React, {Component} from 'react';
import './jumbotron.css';
import {Button, Jumbotron} from 'reactstrap/lib';

class Jumbotron1 extends Component {
    render(){
        return(
            
            <div className="jumbotron">
            <Jumbotron>
                <h1 className="display-4">Theme Park Buddy</h1>
                {this.props.loginForm ? 
                    <Button onClick={this.props.toggle} className="btn btn-lg btn-red">Sign Up</Button>
                    <h2>Welcome, Please Sign Up</h2>
                        :
                    <Button onClick={this.props.toggle} className="btn btn-lg btn-red">Sign In</Button>
                    <h2>Welcome, Please Sign In</h2>}
                    
            </Jumbotron>
            </ div>
            
        
            
        )
    }
}

export default Jumbotron1