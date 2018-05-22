/* eslint-disable react/prefer-stateless-function, react/jsx-closing-tag-location, max-len, react/prop-types */

import React, { Component } from 'react';

// List chatable users
class Side extends Component {
  render() {
    return (
      <div className="side d-flex flex-column justify-content-between">
        <ul className="list list-unstyled mt-5 text-light">
          {this.props.users}
        </ul>
        <div className="hide status text-center my-4">Logged in as Wayne Su</div>
      </div>
    );
  }
}

export default Side;
