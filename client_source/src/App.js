import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import ChatMessagePacker from './containers/ChatMessagePacker';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="popWindow" style={{display: this.props.rootState.isLoading ? '' : 'none'}}>
          <img className="loading" src={require('./assets/loading.gif')}/>
        </div>
        <ChatMessagePacker></ChatMessagePacker>
      </div>
    );
  }
}

App.propTypes = {
  rootState: PropTypes.object,
  showLoading: PropTypes.func
};

export default App;
