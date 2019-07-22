import React from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow'; 
import ProductRow from '../ProductRow/ProductRow'; 


class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText; //收尋的文字
      const inStockOnly = this.props.inStockOnly; //是否鎖住收尋功能
      const rows = [];//把符合的值塞入陣列
      let lastCategory = null; //比對最後剩下的貨物清單
      
      this.props.products.forEach((product) => {//迭代貨物陣列
        if (product.name.indexOf(filterText) === -1) {
            return; //沒有找到就回去 
          }
          if (inStockOnly && !product.stocked) {
            return; //2個true才會回去
          }

        if (product.category !== lastCategory) {//如果不適空值時就 把陣列塞入
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category; //每次跑時比對的貨物會換
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody> {/* 印出陣列 */}
        </table>
      );
    }
  }

  export default ProductTable;