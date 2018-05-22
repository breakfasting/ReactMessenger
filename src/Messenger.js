/* eslint-disable react/prefer-stateless-function, react/jsx-closing-tag-location, max-len, react/prop-types */

import React, { Component } from 'react';

function Sent(props) {
  return <div className="rounded bg-sent align-self-end p-2 mt-2">{props.text}</div>;
}

function Received(props) {
  return <div className="rounded bg-light align-self-start p-2 mt-2">{props.text}</div>;
}

function Header(props) {
  return (
    <div className="bg-light media">
      <img className="m-3 rounded" src={props.avatar} alt="" />
      <div className="media-body align-self-center">
        <h4 className="my-0">{props.name}</h4>
        <span className="status">{props.status}</span>
      </div>
    </div>
  );
}

function Messages(props) {
  const list = [];
  props.list.forEach((element) => {
    if (element.fromUID === props.between) {
      list.push(<Received text={element.text} />);
    } else {
      list.push(<Sent text={element.text} />);
    }
  });
  return (
    <div className="messenges">
      <div className="container d-flex flex-column pb-2">
        {list}
      </div>
    </div>
  );
}

class Messenger extends Component {
  render() {
    return (
      <div className="main d-flex flex-column justify-content-between">
        <Header avatar="http://via.placeholder.com/100x100" name="Tony Stark" status="Last Online 2 Days Ago" />
        <Messages list={this.props.messages} between={this.props.between} />
        <div className="type bg-light">
          <div className="container">
            <div className="input-group my-3">
              <input type="text" className="form-control" placeholder="Message" />
              <div className="input-group-append">
                <button className="btn current" type="button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messenger;
