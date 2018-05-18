import React, { Component } from 'react';
import Header from './components/Header/Header';
import SearchMenu from './components/SearchMenu/SearchMenu';
import DataTable from './components/DataTable/DataTable';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <div className="row w-100 mx-0 bottomComponents">
              <SearchMenu />
              <DataTable />
          </div>
      </div>
    );
  }
}

export default App;
