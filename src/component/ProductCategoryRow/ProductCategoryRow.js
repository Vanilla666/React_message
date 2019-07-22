import React from 'react';

class ProductCategoryRow extends React.Component {
    render() {
      const category = this.props.category; //接收貨物類別
      return (
        <tr>
          <th colSpan="2">
            {category} {/* 印出類別 */}
          </th>
        </tr>
      );
    }
  }

  export default ProductCategoryRow;