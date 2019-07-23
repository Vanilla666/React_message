
import React from 'react';
import TodoItem from './TodoItem';
import FilteredList from './FilteredList';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          content:'',
          item:[],
          searhitem:['FGG','DFF'],//備份資料
        };//內部自定義的變數
       
      }
      
      componentDidMount(){  //DOM有關的初始化操作 this.setState => render => DidMount
        this.setState({ 
          searhitem:this.state.item //把值備份
        })
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
          searhitem:this.state.item
        })
      }

      searhItem = (x) => { //拿到子組件的收尋文字
        // console.log('子組件的收尋文字: ',x);
        let searhText = this.state.item.filter ((item)=>{
          return item.toLowerCase().indexOf(x.toLowerCase()) !== -1
        }); //代表有找到
        console.log('searhText', searhText);

        if(searhText.length !== 0 && x !== ''){ //代表收尋陣列有值

          console.log("代表收尋陣列有值",searhText);
          this.setState({
            item:searhText
          })
      
        }

        else{

          console.log("沒有值",this.state.searhitem);//空陣列或空輸入
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