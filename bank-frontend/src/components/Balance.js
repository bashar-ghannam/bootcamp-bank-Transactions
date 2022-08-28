import React, { Component } from 'react';

class Balance extends Component {
  render() {
    return (
      <div>
        <h3>
          Balance :{' '}
          <span style={{ color: this.props.balance >= 500 ? 'green' : 'red' }}>
            {this.props.balance}
          </span>
        </h3>
      </div>
    );
  }
}

export default Balance;
