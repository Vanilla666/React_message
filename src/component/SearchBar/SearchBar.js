
import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
      }
      
      handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);//給父組件事件處理
      }
      
      handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);//給父組件事件處理
      }

    render() {
        const filterText = this.props.filterText; //收尋的文字
        const inStockOnly = this.props.inStockOnly; //是否鎖住收尋功能
      return (
        <form>
          <input type="text" 
          placeholder="Search..."
           value={filterText}  
           onChange={this.handleFilterTextChange}
           /> {/* 輸入視窗用來找貨物 */}
          <p>
            <input type="checkbox" 
                checked={inStockOnly}
                onChange={this.handleInStockChange}
            />
            {' '} 
            Only show products in stock
          </p>
        </form>
      );
    }
  }

  export default SearchBar;