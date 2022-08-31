import React, { Component } from 'react';
import Category from './Category';

class Categorys extends Component {
  render() {
    return (
      <div>
        {this.props.categorys.length === 0 ? (
          <h4 className="noItems">No transcations added yet!</h4>
        ) : (
          <div className="w-100 mt-5">
            <table className="table table-striped w-75 m-auto">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category</th>
                  <th scope="col">Total amount </th>
                </tr>
              </thead>
              <tbody>
                {this.props.categorys.map((category, index) => (
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
