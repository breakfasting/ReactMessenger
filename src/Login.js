/* eslint-disable react/prefer-stateless-function, react/jsx-closing-tag-location, max-len, react/prop-types */

import React, { Component } from 'react';
import App from './App';

// List chatable users
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: true,
      login: 0,
    };
  }
  chooseLogin(id) {
    this.setState({
      choose: false,
      login: id,
    });
  }

  render() {
    let list = [];
    if (this.state.choose) {
      list.push(<button onClick={() => this.chooseLogin(0)} >Wayne Su</button>);
      list.push(<button onClick={() => this.chooseLogin(1)} >Bruce Banner</button>);
      list.push(<button onClick={() => this.chooseLogin(2)} >Tony Stark</button>);
      list.push(<button onClick={() => this.chooseLogin(3)} >Steve Rogers</button>);
    } else {
      list = [<App login={this.state.login} />];
    }
    return list;
  }
}

export default Login;
