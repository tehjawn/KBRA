import React, {Component} from 'react';
import './App.css';

import ClockTower from './ClockTower/ClockTower';

class App extends Component {
  render() {
    return ( 
      <div className = "App" >
        <ClockTower />
      </div>
    );
  }
}

export default App;