import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Header.css';

import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      stuff: []
    }
  }

  // componentDidMount(){
  //   fetch('/api/test').then( res => res.json())
  //                     .then( data => {
  //                       this.setState({stuff: data}, () => console.log(`data: ${data.test}`))
  //                     })
  // }


  render() {
    return (
      <div>
        <Card cascade id="topPanel">
            <CardBody>
              <div className="headerCard mx-auto rounded">
                  <CardTitle className="cardText">UFO sightings Database</CardTitle>
                  <CardText className="cardSubText z-depth-5">Crack open a cold one and search our database for creepy UFO sightings</CardText>
              </div>
            </CardBody>
        </Card>
      </div>
    );
  }
}

export default Header;
