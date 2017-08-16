import React, { Component } from 'react'
import './App.css'
import AppointmentsContainer from './containers/AppointmentsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppointmentsContainer />
      </div>
    );
  }
}

export default App;
