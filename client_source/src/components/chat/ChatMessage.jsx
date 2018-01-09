import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ChatMessage.css';
import PropTypes from 'prop-types';

const constant = require('../../common/constant');

class ChatMessage extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      result: ''
    };
  }

  handlerMessage(event) {
    this.setState({message: event.target.value});
  }

  getUsers() {
    this.props.setAppState('showLoading', '');
    let xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      const activeNames = ['MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
      for (let activeName in activeNames) {
        try {
          xhr = new ActiveXObject(activeName);
        } catch (e) {}
      }
    }

    if (!xhr) {
      alert('XMLHttpRequest对象创建失败!!!');
    } else {
      const _this = this;
      xhr.open('post', constant.api.url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          if (xhr.responseText) {
            const records = new Array();
            const users = JSON.parse(xhr.responseText).data;
            let index = 0;
            for (let user of users) {
              records.push(<tr key={user.username} className={index % 2 != 0 ? 'active' : ''}>
                <td>{++index}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.mail}</td>
              </tr>);
            }
            const result = <table className="table table-hover table-striped">
              <tbody>
                <tr className="success">
                  <th>#</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>E-mail</th>
                </tr>
                {records}
              </tbody>
            </table>;
            _this.setState({result: result});
          }
        }
        _this.props.setAppState('showLoading', 'none');
      };
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send('{"username": "' + this.state.message + '"}');
    }
  }

  render() {
    const message = this.state.message;
    return (
      <div className="ChatMessage">
        <div className="chat-table">
          <div className="row">
            <div className="col-sm-5" style={{textAlign: 'right'}}>Username: </div>
            <div className="col-sm-7" style={{textAlign: 'left'}}>
              <input style={{width: '200px'}} onChange={this.handlerMessage.bind(this)} value={message}/>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-sm-5" style={{textAlign: 'right'}}>Username: </div>
            <div className="col-sm-7" style={{textAlign: 'left'}}>
              <label className="label-text">{message}</label>
            </div>
          </div>
          <br/>
          <br/>
          <button className="btn btn-success" onClick={this.getUsers.bind(this)}>Submit</button>
        </div>
        <br/>
        <br/>
        <div className="chat-table">
          {this.state.result}
        </div>
      </div>
    );
  }
}

ChatMessage.propTypes = {
  setAppState: PropTypes.func
};

export default ChatMessage;