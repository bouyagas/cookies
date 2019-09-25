import React, { Component } from 'react';
import cookie from './img/myCookies.jpg';
export default class Cookie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: 0,
    };
    this.handleCookieUpdate = this.handleCookieUpdate.bind(this);
  }
  handleCookieUpdate() {
    this.setState({ cookie: this.state.cookie + 1 });
  }
  render() {
    return (
      <div>
        <h1 style={{ color: 'black' }}>
          You have {this.state.cookie} cookies click
        </h1>
        <img
          onClick={this.handleCookieUpdate}
          src={cookie}
          className="App-logo"
          alt="cookie"
        />
      </div>
    );
  }
}
