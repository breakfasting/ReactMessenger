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
    if (this.state.choose) {
      return (
        <div className="bg-dark h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="status text-center my-2">Login as</div>
          <ul className="list list-unstyled text-light">
            <li>
              <button className="listbtn px-5 py-3 media" onClick={() => this.chooseLogin(0)}>
                <div className="image">
                  <img className="mr-3 rounded border shadow-sm" src="https://i.imgur.com/CTXdrhE.jpg" width="40px" height="40px" alt="" />
                </div>
                <div className="media-body align-self-center">
                  <h6>Wayne Su</h6>
                </div>
              </button>
            </li>
            <li>
              <button className="listbtn px-5 py-3 media" onClick={() => this.chooseLogin(1)}>
                <div className="image">
                  <img className="mr-3 rounded border shadow-sm" src="https://i.imgur.com/oIhNwck.jpg" width="40px" height="40px" alt="" />
                </div>
                <div className="media-body align-self-center">
                  <h6>Bruce Banner</h6>
                </div>
              </button>
            </li>
            <li>
              <button className="listbtn px-5 py-3 media" onClick={() => this.chooseLogin(2)}>
                <div className="image">
                  <img className="mr-3 rounded border shadow-sm" src="https://i.imgur.com/piHJuIL.jpg" width="40px" height="40px" alt="" />
                </div>
                <div className="media-body align-self-center">
                  <h6>Tony Stark</h6>
                </div>
              </button>
            </li>
            <li>
              <button className="listbtn px-5 py-3 media" onClick={() => this.chooseLogin(3)}>
                <div className="image">
                  <img className="mr-3 rounded border shadow-sm" src="https://i.imgur.com/YyclIYy.jpg" width="40px" height="40px" alt="" />
                </div>
                <div className="media-body align-self-center">
                  <h6>Steve Rogers</h6>
                </div>
              </button>
            </li>
          </ul>
        </div>
      );
    }
    return <App login={this.state.login} />;
  }
}

export default Login;
