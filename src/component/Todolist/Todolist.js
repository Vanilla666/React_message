
import React from 'react';
import TodoItem from './TodoItem';

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

      deleteItem = (k) =>{ //傳進當前按鈕按下後的索引值
        // console.log('k',this.state.item[k]); //拿到陣列的值
        this.state.item.splice(this.state.item[k], 1);// 刪除1筆 資料
        console.log('刪除陣列裡當前索引值的資料',this.state.item);
        this.setState({
          item:this.state.item,//改變陣列
        })
      }


    render() {
        const {handleContent,addItem,deleteItem} = this,
              {content,item} = this.state;
              // console.log(`目前item : ${this.state.item}`); 
      return (
        <div>

          <input type="text" 
          placeholder="addItem..."
          value={content}  
          onChange={handleContent}
           /> {/* 輸入視窗用來找貨物 */}
           <button onClick={addItem}>addItem</button>

        <ul>
           <TodoItem item={item}  onItemClick={deleteItem}/> {/* 拆成組件 */}
        </ul>

        </div>
      );
    }
  }

  export default Todolist;