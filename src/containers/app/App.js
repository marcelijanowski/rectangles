import React, { Component } from 'react';

import Form from '../form/Form';
import Stock from '../stock/StockContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Stock />
      </div>
    );
  }
}

export default App;
