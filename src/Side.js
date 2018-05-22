/* eslint-disable react/prefer-stateless-function, react/jsx-closing-tag-location, max-len, react/prop-types */

import React, { Component } from 'react';
import User from './User';

// List chatable users
class Side extends Component {
  render() {
    const list = [];
    const noteList = this.props.users[this.props.login].notification;

    this.props.users.forEach((element) => {
      if (element.uid !== this.props.login) {
        if (element.uid === this.props.between) {
          list.push(<User key={element.uid} navigateUsers={this.props.navigateUsers} uid={element.uid} avatar={element.avatar} notification={noteList[element.uid]} name={element.name} status={element.status} current />);
        } else {
          list.push(<User key={element.uid} navigateUsers={this.props.navigateUsers} uid={element.uid} avatar={element.avatar} notification={noteList[element.uid]} name={element.name} status={element.status} />);
        }
      }
    });
    return (
      <div className="side d-flex flex-column justify-content-between">
        <ul className="list list-unstyled mt-5 text-light">
          {list}
        </ul>
        <div className="hide status text-center my-4">Logged in as {this.props.users[this.props.login].name}</div>
      </div>
    );
  }
}

export default Side;
