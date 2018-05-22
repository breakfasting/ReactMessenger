/* eslint-disable react/prefer-stateless-function, react/jsx-closing-tag-location, max-len, react/prop-types */

import React, { Component } from 'react';
import User from './User';

// List chatable users
class Side extends Component {
  render() {
    const list = [];

    this.props.users.forEach((element) => {
      list.push(<User navigateUsers={this.props.navigateUsers} uid={element.uid} avatar={element.avatar} notification={element.notification} name={element.name} status={element.status} />);
    });
    return (
      <div className="side d-flex flex-column justify-content-between">
        <ul className="list list-unstyled mt-5 text-light">
          {list}
        </ul>
        <div className="hide status text-center my-4">Logged in as Wayne Su</div>
      </div>
    );
  }
}

export default Side;
