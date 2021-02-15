import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import CMSHeader from './CMSHeader';
import { BrowserRouter as MyRouter } from 'react-router-dom'; 
import CMSFooter from './CMSFooter';
import CMSBody from './CMSBody';


class App extends Component {
  render() {
    return (
      <MyRouter>
        <div className="card">
          <CMSHeader />
          <CMSBody />
          <CMSFooter />
        </div>
      </MyRouter>
    );
  }
}

export default App;
