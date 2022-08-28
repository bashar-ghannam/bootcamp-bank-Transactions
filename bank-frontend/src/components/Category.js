import React, { Component } from 'react';

class Category extends Component {
  render() {
    let category = this.props.category;
    return (
      <tr>
        <th scope="row">{this.props.order + 1}</th>
        <td>{category._id}</td>
        <td>{category.sum}</td>
      </tr>
    );
  }
}

export default Category;
