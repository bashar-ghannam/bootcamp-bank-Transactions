import React, { Component } from 'react';

class Transaction extends Component {
  deleteTranscation = () => {
    this.props.deleteTranscation(this.props.transcation._id);
  };
  render() {
    let transcation = this.props.transcation;
    let color = this.props.bg && transcation.amount < 0 ? 'redBg' : '';
    return (
      <tr className={color}>
        <th scope="row">{this.props.order + 1}</th>
        <td className={transcation.amount >= 0 ? 'greenColor' : 'redColor'}>
          {transcation.amount}
        </td>
        <td>{transcation.category}</td>
        <td>{transcation.vendor}</td>
        <td>
          <span className="deleteBtn" onClick={this.deleteTranscation}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </span>
        </td>
      </tr>
    );
  }
}

export default Transaction;
