
import React from 'react';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          content:'',
          item:[],
        };//內部自定義的變數
       
      }
      
      handleContent = (e) => {
        this.setState({
          content: e.target.value
         });//改變 State name
      }
      
      addItem = () => { //建立一個陣列把輸入值加入陣列最後把資料打到畫面上
        this.state.item.push(this.state.content); //把值存到陣列
        let currentMessage=this.state.item;
        console.log(`目前item : ${currentMessage}`); 
        this.setState({ //改變內部變數不然會少一個炫覽
          item:currentMessage,
        });
      }

    render() {
        const {handleContent,addItem} = this,
              {content,item} = this.state;
              console.log(`目前item : ${this.state.item}`); 
      return (
        <div>
          <input type="text" 
          placeholder="addItem..."
          value={content}  
          onChange={handleContent}
           /> {/* 輸入視窗用來找貨物 */}
           <button onClick={addItem}>addItem</button>
           <ul>
        {item.map((content,index) =>
          <li  id={index} key={content.toString()} value={content} > {content} </li >
        )} {/* 增加ID 可以用來辨別是哪一個 用來刪除用 */}
      </ul>
        </div>
      );
    }
  }

  export default Todolist;