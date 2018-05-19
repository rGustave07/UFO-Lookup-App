import React, { Component } from 'react';
import Header from './components/Header/Header';
import SearchMenu from './components/SearchMenu/SearchMenu';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
              <SearchMenu />
      </div>
    );
  }
}

export default App;
