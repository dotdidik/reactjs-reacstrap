import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './Header';
import AppProduct from './AppProduct';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppProduct />
      </div>
    );
  }
}

export default App;
