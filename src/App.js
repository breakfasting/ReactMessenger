/* eslint-disable react/prefer-stateless-function, react/jsx-closing-tag-location, max-len, react/prop-types, no-undef */

import React, { Component } from 'react';
import io from 'socket.io-client';
import Side from './Side';
import Messenger from './Messenger';
import './App.css';

// Other users to chat with after logging in (for render before API call finished)
const USERS = [
  {
    uid: 0,
    name: 'Wayne Su',
    avatar: '',
    notification: 0,
    status: '',
  },
  {
    uid: 1,
    name: 'Bruce Banner',
    avatar: '',
    notification: 0,
    status: '',
  },
  {
    uid: 2,
    name: 'Tony Stark',
    avatar: '',
    notification: 0,
    status: '',
  },
  {
    uid: 3,
    name: 'Steve Rogers',
    avatar: '',
    notification: 0,
    status: '',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      messages: [],
      chatWith: 1,
    };
    this.switchPage = this.switchPage.bind(this);

    this.socket = io('localhost:8080');

    this.socket.on('RECEIVE_USERS', (data) => {
      this.setState({ users: data });
    });

    this.socket.on('MESSAGES', (data) => {
      this.setState({ messages: data });
    });
  }
  componentWillMount() {
    this.socket.emit('LOGIN', this.props.login);
    this.socket.emit('GETUSERS');
    // WIP:api沒回來前會直接render，但我的render需要預設state
    this.setState({ users: USERS });

    this.socket.emit('GETMESSAGES');
    this.switchPage((this.props.login === 0) ? 1 : 0);
  }
  componentDidMount() {
    document.title = USERS[this.props.login].name;
  }

  switchPage(user) {
    this.setState({ chatWith: user });
    this.socket.emit('REMOVENOTS', { from: this.props.login, remove: user });
  }

  render() {
    return (
      <div className="app h-100 d-flex">
        <Side navigateUsers={this.switchPage} users={this.state.users} login={this.props.login} between={this.state.chatWith} />
        <Messenger messages={this.state.messages} login={this.props.login} between={this.state.chatWith} info={this.state.users[this.state.chatWith]} />
      </div>
    );
  }
}


export default App;
