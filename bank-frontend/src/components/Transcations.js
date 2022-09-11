import React, { Component } from 'react';
import Balance from './Balance';
import Transaction from './Transaction';

class Transcations extends Component {
  constructor() {
    super();
    this.state = {
      toggleBG: false,
    };
  }

  toggleBg = () => {
    this.setState({
      toggleBG: !this.state.toggleBG,
    });
  };

  render() {
    return (
      <div>
        {this.props.transcations.length === 0 ? (
          <h4 className="noItems">No transcations added yet!</h4>
        ) : (
          <div className="w-100 mt-5">
            <h1 className="w-75 m-auto">
              <Balance balance={this.props.balance} />
            </h1>
            <table className="table table-striped w-75 m-auto">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Category</th>
                  <th scope="col">Vendor</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.props.transcations.map((transcation, index) => (
                  <Transaction
                    order={index}
                    transcation={transcation}
                    key={index}
                    deleteTranscation={this.props.deleteTranscation}
                    bg={this.state.toggleBG}
                  />
                ))}
              </tbody>
            </table>
            <button onClick={this.toggleBg}>Change bg</button>
          </div>
        )}
      </div>
    );
  }
}

export default Transcations;
