import React from 'react';
import SearchBar from '../SearchBar/SearchBar'; 
import ProductTable from '../ProductTable/ProductTable'; 
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filterText: '',//收尋的文字
          inStockOnly: false//radio
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
      }

      handleFilterTextChange(filterText) { //改變收尋值
        this.setState({
          filterText: filterText
        });
      }
      
      handleInStockChange(inStockOnly) { //是否鎖住
        this.setState({
          inStockOnly: inStockOnly
        })
      }

    render() {
      return (
        <div>
          <SearchBar 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}  
           />
          <ProductTable 
            products={this.props.products} 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />{/* 接收從最上層丟入的陣列 */}
        </div>
      );
    }
  }


  export default FilterableProductTable;