import React, { Component } from 'react';
import './App.css';
import Routes from './components/Routes';

class App extends Component {

  state={
    wrapperClasses : 'wrapper',
    active: false
  }




  testing = () => {
    const currentState = this.state.active
    this.setState({wrapperClasses: 'wrapper toggled', active: !currentState})
  }
  render() {
    return (
      <div className={this.state.active ?  'wrapper toggled' : 'wrapper'}>
        <Routes click={this.testing}/>
      </div>
    );
  }
}

export default App;
