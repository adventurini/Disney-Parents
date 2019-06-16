import React, {Component} from '../../node_modules/react';
import './jumbotron.css';
import {Button, Jumbotron} from '../../node_modules/reactstrap/lib';

class Jumbotron1 extends Component {
    render(){
        return(
            
            <div className="jumbotron">
            <Jumbotron>
                <h1 className="display-4">Theme Park Buddy</h1>
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