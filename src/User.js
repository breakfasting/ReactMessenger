/* eslint-disable react/prefer-stateless-function, react/jsx-closing-tag-location, max-len, react/prop-types */

import React, { Component } from 'react';

function ShowNotification(props) {
  if (props.count !== 0) {
    return <span className="ml-1 badge badge-danger">{props.count}</span>;
  }
  return null;
}

class User extends Component {
  render() {
    return (
      <li className={this.props.current ? 'current' : null}>
        <button onClick={() => this.props.navigateUsers(this.props.uid)} className="listbtn pl-5 py-3 media">
          <div className="image">
            <img className="mr-3" src={this.props.avatar} alt="" />
            <ShowNotification count={this.props.notification} />
          </div>
          <div className="media-body hide">
            <h6 className="my-0">{this.props.name}</h6>
            <span className="status">{this.props.status}</span>
          </div>
        </button>
      </li>
    );
  }
}

export default User;
