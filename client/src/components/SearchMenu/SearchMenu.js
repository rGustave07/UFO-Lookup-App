import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './SearchMenu.css';
import DataTable from '../DataTable/DataTable';

import { Button, Input } from 'mdbreact';

    const initialState = {
      datetime: "",
      city: "",
      state: "",
      country: "",
      shape: "",
      resultArr: []
    }

class SearchMenu extends Component {
    constructor(){
        super();
        let setupState = initialState;
    }
    state = {
      datetime: "",
      city: "",
      state: "",
      country: "",
      shape: "",
      resultArr: []
    }


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
            let array = data;
            this.setState({resultArr: array})
            console.log(this.state.resultArr);
          })

    }



    render(){
        return(
          <div className="row w-100 mx-0 bottomComponents">
              <div className="col-4 px-0 mx-0 menu">
                  <div id="inputNavigation">
                    <h1> Search the Cosmos </h1>
                        <Input disabled className="mb-4 extraMargin" label="Date/Time" onChange={this.handleDateTime} value={this.state.datetime}/>
                        <Input className="mb-4 extraMargin" label="City" onChange={this.handleCity} value={this.state.city}/>
                        <Input className="mb-4 extraMargin" label="State" onChange={this.handleStateInput} value={this.state.state}/>
                        <Input className="mb-4 extraMargin" label="Country" onChange={this.handleCountryInput} value={this.state.country}/>
                        <Input disabled className="mb-4 extraMargin" label="Shape" onChange={this.handleShapeInput} value={this.state.shape}/>
                    <Button onClick={this.handleButtonSubmission}>Search for Aliens</Button>
                  </div>
              </div>
              {/* Data Table component*/}
              {/* TODO: data should be returning results from server */}
              <DataTable data={this.state.resultArr}/>
           </div>
        )
    }
}

export default SearchMenu;
