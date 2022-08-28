import axios from 'axios';
import React, { Component } from 'react';
import Balance from './Balance';
import Category from './Category';

class Categorys extends Component {
  constructor() {
    super();
    this.state = {
      categorys: [],
    };
  }

  async componentDidMount() {
    let categorys = await axios.get('http://localhost:4200/categorys');
    this.setState({ categorys: categorys.data });
  }

  render() {
    return (
      <div>
        {this.state.categorys.length === 0 ? (
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
                  <th scope="col">Category</th>
                  <th scope="col">Total amount </th>
                </tr>
              </thead>
              <tbody>
                {this.state.categorys.map((category, index) => (
                  <Category order={index} category={category} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Categorys;
