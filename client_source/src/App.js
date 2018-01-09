import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ChatMessage from './components/chat/ChatMessage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showLoading: 'none'
    };
  }

  setAppState(key, value) {
    const stateObj = {};
    stateObj[key] = value;
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="popWindow" style={{display: this.state.showLoading}}>
          <img className="loading" src={require('./assets/loading.gif')}/>
        </div>
        <ChatMessage setAppState={this.setAppState.bind(this)}></ChatMessage>
      </div>
    );
  }
}

export default App;
