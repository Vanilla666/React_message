
import React from 'react';
import TodoItem from './TodoItem';
import FilteredList from './FilteredList';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          content:'',
          item:[],
          searhitem:[],//備份資料
        };//內部自定義的變數
       
      }
      
      // componentDidMount(){  //DOM有關的初始化操作 
      //   // this.setState({ 
      //   //   searhitem:this.state.item //把值備份
      //   // })
      // }

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
          searhitem:currentMessage
        });
      }

      deleteItem = (k) =>{ //傳進當前按鈕按下後的索引值
        console.log('k',this.state.item[k]); //拿到陣列的值
        // delete this.state.item[k];
        this.state.item.splice(k, 1);// 刪除1筆 資料 splice(當前索引,刪幾筆)
        console.log('刪除陣列裡當前索引值的資料',this.state.item);
        this.setState({
          item:this.state.item,//改變陣列
          searhitem:this.state.item
        })
      }

      searhItem = (x) => { //拿到子組件的收尋文字
        console.log('子組件的收尋文字: ',x);
        let searhText = this.state.item.filter ((item)=>{
          return item.toLowerCase().indexOf(x.toLowerCase()) !== -1
        }); //代表有找到
        console.log('searhText', searhText);
        // && x !== ''
        if(searhText.length > 0  ){ //代表收尋陣列有值

          console.log("代表收尋陣列有值",searhText);
          this.setState({
            item:searhText
          })
      
        }

          if(searhText.length === 0 ){
            console.log("沒有值",this.state.searhitem);//空輸入
            this.setState({
              item:searhText//就把備份資料加入
            })
  
          }

          if(x === ''){ //還原備份
            console.log(" '' ",this.state.searhitem);//空字串
            this.setState({
              item:this.state.searhitem//就把備份資料加入
            })
          }


        }
       
      

    render() {
        const {handleContent,addItem,deleteItem,searhItem} = this,
              {content,item} = this.state;
              // console.log(`目前item : ${this.state.item}`); 
              
      return (
        <div>
          <FilteredList onsearh={searhItem} /> 

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