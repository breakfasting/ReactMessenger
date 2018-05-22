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
      <img className="m-3 rounded border shadow-sm" src={props.avatar} width="100px" height="100px" alt="" />
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
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.newMessageSent = this.newMessageSent.bind(this);
  }
  componentWillMount() {
    this.setState({ messages: this.props.messages });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ messages: newProps.messages });
  }

  newMessageSent(event) {
    const messagelist = this.state.messages;
    messagelist.push({
      fromUID: this.props.login,
      toUID: this.props.between,
      text: this.state.text,
    });
    this.setState({ text: '' });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="main d-flex flex-column justify-content-between">
        <Header avatar={this.props.info.avatar} name={this.props.info.name} status={this.props.info.status} />
        <Messages list={this.state.messages} between={this.props.between} />
        <div className="type bg-light">
          <div className="container">
            <div className="input-group my-3">
              <input type="text" value={this.state.text} onChange={this.handleChange} className="form-control" placeholder="Message" />
              <div className="input-group-append">
                <button className="btn current" type="button" onClick={this.newMessageSent} >Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messenger;
