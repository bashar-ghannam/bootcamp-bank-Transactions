import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Temp extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      category: '',
      vendor: '',
    };
  }

  deposit = () => {
    let amount = this.state.amount.trim();
    let category = this.state.category.trim();
    let vendor = this.state.vendor.trim();
    if (amount === '' || category === '' || vendor === '') {
      alert('Please fill all fields!');
    } else {
      let transcation = { amount, category, vendor };
      this.props.addTranscation(transcation);
      const { navigate } = this.props;
      navigate('/');
    }
  };

  withdraw = () => {
    let amount = this.state.amount.trim();
    let category = this.state.category.trim();
    let vendor = this.state.vendor.trim();
    if (amount === '' || category === '' || vendor === '') {
      alert('Please fill all fields!');
    } else {
      let transcation = { amount: -amount, category, vendor };
      this.props.addTranscation(transcation);
      const { navigate } = this.props;
      navigate('/');
    }
  };

  render() {
    return (
      <div className="mt-5">
        <div className="d-flex flex-column align-items-center">
          <div className="col-md-4">
            <label htmlFor="mount-input" className="form-label">
              Amount :
            </label>
            <input
              type="number"
              className="form-control"
              id="amount-input"
              placeholder="amount"
              value={this.state.amount}
              onChange={(e) => this.setState({ amount: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="category-input" className="form-label">
              Category :
            </label>
            <input
              type="text"
              className="form-control"
              id="category-input"
              placeholder="category"
              value={this.state.category}
              onChange={(e) => this.setState({ category: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="vendor-input" className="form-label">
              Vendor :
            </label>
            <input
              type="text"
              className="form-control"
              id="vendor-input"
              placeholder="vendor"
              value={this.state.vendor}
              onChange={(e) => this.setState({ vendor: e.target.value })}
            />
          </div>
          <div className="col-md-4 mt-3 d-flex justify-content-around">
            <button className="btn btn-primary" onClick={this.deposit}>
              Deposit
            </button>
            <button className="btn btn-primary" onClick={this.withdraw}>
              Withdraw
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default function Operations(props) {
  const navigate = useNavigate();
  return <Temp {...props} navigate={navigate} />;
}
