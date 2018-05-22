/* eslint-disable react/prefer-stateless-function, react/jsx-closing-tag-location, max-len */

import React, { Component } from 'react';
import Side from './Side';
import User from './User';
import Messenger from './Messenger';
import './App.css';

// Other users to chat with after logging in
const USERS = [
  {
    uid: 1,
    name: 'Bruce Banner',
    avatar: 'http://via.placeholder.com/40x40',
    notification: 1,
    status: 'Last Online 21:39 PM',
  },
  {
    uid: 2,
    name: 'Tony Stark',
    avatar: 'http://via.placeholder.com/40x40',
    notification: 0,
    status: 'Last Online 2 Days Ago',
  },
  {
    uid: 3,
    name: 'Steve Rogers',
    avatar: 'http://via.placeholder.com/40x40',
    notification: 0,
    status: 'Last Online 08:30 AM',
  },
];

// Messenges that involve current user and clicked chatuser, current uid=0
const MESSAGES2 = [
  {
    mid: 0,
    fromUID: 2,
    toUID: 0,
    text: 'Lorem, ipsum.',
  },
  {
    mid: 1,
    fromUID: 2,
    toUID: 0,
    text: 'Lorem.',
  },
  {
    mid: 2,
    fromUID: 2,
    toUID: 0,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, doloribus.',
  },
  {
    mid: 3,
    fromUID: 0,
    toUID: 2,
    text: 'Lorem.',
  },
  {
    mid: 4,
    fromUID: 0,
    toUID: 2,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nihil quae autem est voluptates eius placeat, nam natus perspiciatis reiciendis? Culpa est numquam optio quia, distinctio ad ipsa dicta impedit mollitia a! Necessitatibus praesentium porro aliquam sapiente. Alias, eaque illo?',
  },
  {
    mid: 5,
    fromUID: 2,
    toUID: 0,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error soluta, vero ducimus magni corporis voluptate commodi iure et eum quae amet beatae porro minima reprehenderit tempore delectus ut? Voluptates est cumque et dolorem deleniti sequi blanditiis officia praesentium necessitatibus fugit velit saepe eius, rem vitae tempore molestias minima repudiandae tenetur.',
  },
];

const MESSAGES1 = [
  {
    mid: 6,
    fromUID: 1,
    toUID: 0,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error soluta, vero ducimus magni corporis voluptate commodi iure et eum quae amet beatae porro minima reprehenderit tempore delectus ut? Voluptates est cumque et dolorem deleniti sequi blanditiis officia praesentium necessitatibus fugit velit saepe eius, rem vitae tempore molestias minima repudiandae tenetur.',
  },
];
const MESSAGES3 = [
  {
    mid: 7,
    fromUID: 3,
    toUID: 0,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error soluta, vero ducimus magni corporis voluptate commodi iure et eum quae amet beatae porro minima reprehenderit tempore delectus ut? Voluptates est cumque et dolorem deleniti sequi blanditiis officia praesentium necessitatibus fugit velit saepe eius, rem vitae tempore molestias minima repudiandae tenetur.',
  },
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: [], messages: [] };
    this.getUsers = this.getUsers.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }
  componentDidMount() {
    this.getUsers();
    this.getMessages();
  }

  getMessages() {
    this.setState({ messages: MESSAGES2 });
    console.log('click');
  }

  getUsers() {
    const list = [];

    USERS.forEach((element) => {
      list.push(<User onClick={this.getMessages} avatar={element.avatar} notification={element.notification} name={element.name} status={element.status} />);
    });
    this.setState({ rows: list });
  }
  render() {
    return (
      <div className="app h-100 d-flex">
        <button onClick={this.getMessages}>123</button>
        <Side users={this.state.rows} />
        <Messenger messages={this.state.messages} between={2} />
      </div>
    );
  }
}

export default App;
