import React, { Component } from 'react';
import axios from "axios";

class RestCall extends Component {

    constructor(props){
        super(props);
        this.state = {
            pozdrav: ""
        }
    }

    componentDidMount() {
        axios
          .get('http://localhost:8086/spring-rest-demo/home/test')
          .then(response => {
            // store the new state object in the component's state
            this.setState({pozdrav: response.data });
            console.log(response)
          })
          .catch(error => console.log(error));
      }


/*
    componentDidMount() {
        fetch('http://localhost:8086/spring-rest-demo/home/test')
        .then(result=>result.json())
        .then(result=>this.setState({pozdrav: result}))
        .catch(console.log)
      }
*/
    render() {
        return (
            <h1>
                {this.state.pozdrav}
            </h1>
        );
    }

}

export default RestCall;