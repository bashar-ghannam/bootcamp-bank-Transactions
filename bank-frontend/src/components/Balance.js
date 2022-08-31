import React, { Component } from 'react';

class Balance extends Component {
  render() {
    return (
      <div>
        <h3>
          Balance :
          <span
            className={this.props.balance >= 500 ? 'greenColor' : 'redColor'}
          >
            {this.props.balance}
          </span>
        </h3>
      </div>
    );
  }
}

export default Balance;
