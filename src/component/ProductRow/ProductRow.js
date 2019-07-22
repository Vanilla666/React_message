import React from 'react';

class ProductRow extends React.Component {
    render() {
      const product = this.props.product;//接收貨物陣列
      const name = product.stocked ?//符合時
        product.name ://只印出貨物名
        <span style={{color: 'red'}}>
          {product.name} {/* 不符合就印出紅色貨物名 */}
        </span>;
  
      return (
        <tr>
          <td>{name}</td> {/* 貨物名 */}
          <td>{product.price}</td> {/* 貨物價格 */}
        </tr>
      );
    }
  }

  export default ProductRow;