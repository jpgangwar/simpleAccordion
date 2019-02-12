import React, { Component } from 'react';
import Accordion from "./component/Accordion";
import Panel from "./component/panel";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Accordion/>
        <Panel/>
      </React.Fragment> 
    );
  }
}

export default App;
