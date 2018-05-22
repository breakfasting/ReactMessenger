/* eslint-disable react/prefer-stateless-function, react/jsx-closing-tag-location, max-len */

import React, { Component } from 'react';
import Side from './Side';
import Messenger from './Messenger';
import './App.css';

// Other users to chat with after logging in
const USERS = [
  {
    uid: 0,
    name: 'Wayne Su',
    avatar: 'http://via.placeholder.com/40x40',
    notification: 0,
    status: 'Last Online 17:39 PM',
  },
  {
    uid: 1,
    name: 'Bruce Banner',
    avatar: 'https://i.imgur.com/oIhNwck.jpg',
    notification: 1,
    status: 'Last Online 21:39 PM',
  },
  {
    uid: 2,
    name: 'Tony Stark',
    avatar: 'https://i.imgur.com/piHJuIL.jpg',
    notification: 0,
    status: 'Last Online 2 Days Ago',
  },
  {
    uid: 3,
    name: 'Steve Rogers',
    avatar: 'https://i.imgur.com/YyclIYy.jpg',
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
    text: 'Bruce Banner Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error soluta, vero ducimus magni corporis voluptate commodi iure et eum quae amet beatae porro minima reprehenderit tempore delectus ut? Voluptates est cumque et dolorem deleniti sequi blanditiis officia praesentium necessitatibus fugit velit saepe eius, rem vitae tempore molestias minima repudiandae tenetur.',
  },
];
const MESSAGES3 = [
  {
    mid: 7,
    fromUID: 3,
    toUID: 0,
    text: 'Steve Rogers Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error soluta, vero ducimus magni corporis voluptate commodi iure et eum quae amet beatae porro minima reprehenderit tempore delectus ut? Voluptates est cumque et dolorem deleniti sequi blanditiis officia praesentium necessitatibus fugit velit saepe eius, rem vitae tempore molestias minima repudiandae tenetur.',
  },
  {
    mid: 8,
    fromUID: 0,
    toUID: 3,
    text: 'Steve Rogers Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error soluta, vero ducimus magni corporis voluptate commodi iure et eum quae amet beatae porro minima reprehenderit tempore delectus ut? Voluptates est cumque et dolorem deleniti sequi blanditiis officia praesentium necessitatibus fugit velit saepe eius, rem vitae tempore molestias minima repudiandae tenetur.',
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
    this.getUsers = this.getUsers.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }
  componentWillMount() {
    this.getUsers();
    this.getMessages(3);
  }

  getMessages(user) {
    switch (user) {
      case 1:
        this.setState({ messages: MESSAGES1, chatWith: 1 });
        break;
      case 2:
        this.setState({ messages: MESSAGES2, chatWith: 2 });
        break;
      case 3:
        this.setState({ messages: MESSAGES3, chatWith: 3 });
        break;
      default:
        break;
    }
  }

  getUsers() {
    this.setState({ users: USERS });
  }
  render() {
    return (
      <div className="app h-100 d-flex">
        <Side navigateUsers={this.getMessages} users={this.state.users} login={0} between={this.state.chatWith} />
        <Messenger messages={this.state.messages} login={0} between={this.state.chatWith} info={this.state.users[this.state.chatWith]} />
      </div>
    );
  }
}


export default App;
