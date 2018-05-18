import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './SearchMenu.css';
import DataTable from '../DataTable/DataTable';

import { Button, Input, FormInline } from 'mdbreact';

class SearchMenu extends Component {

    state = {
      datetime: "",
      city: "",
      state: "",
      country: "",
      shape: "",
    }

    // Test dataArray
    dataArray = [{
      datetime: "",
      city: "",
      state: "",
      country: "",
      shape: "",
    }, {
      datetime: "",
      city: "",
      state: "",
      country: "",
      shape: "",
    }, {
      datetime: "",
      city: "",
      state: "",
      country: "",
      shape: "",
    }]


    /* Input field submission handlers*/
    handleDateTime = event =>{
        this.setState({ datetime: event.target.value })
    }

    handleCity = event =>{
        this.setState({ city: event.target.value })
    }

    handleStateInput = event =>{
        this.setState({ state: event.target.value })
    }

    handleCountryInput = event =>{
        this.setState({ country: event.target.value })
    }

    handleShapeInput = event => {
        this.setState({ shape: event.target.value })
        console.log(this.state);
    }


    /* Button submission handler */
    handleButtonSubmission = () => {
      let userQuery = JSON.stringify(this.state)
      console.log("Button clicked");
      fetch(`api/${userQuery}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
    }



    render(){
        return(
          <div className="row w-100 mx-0 bottomComponents">
              <div className="col-4 px-0 mx-0 menu">
                  <div id="inputNavigation">
                    <h1> Search the Cosmos </h1>
                        <Input className="mb-4 extraMargin" label="Date/Time" onChange={this.handleDateTime} value={this.state.datetime}/>
                        <Input className="mb-4 extraMargin" label="City" onChange={this.handleCity} value={this.state.city}/>
                        <Input className="mb-4 extraMargin" label="State" onChange={this.handleStateInput} value={this.state.state}/>
                        <Input className="mb-4 extraMargin" label="Country" onChange={this.handleCountryInput} value={this.state.country}/>
                        <Input className="mb-4 extraMargin" label="Shape" onChange={this.handleShapeInput} value={this.state.shape}/>
                    <Button onClick={this.handleButtonSubmission}>Search for Aliens</Button>
                  </div>
              </div>
              {/* Data Table component*/}
              <DataTable data={this.dataArray}/>
           </div>
        )
    }
}

export default SearchMenu;
