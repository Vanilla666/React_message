import React,{Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);//繼承props
        this.state = {

        };//內部自定義的變數
    }

     handleClick = (e) => {
         console.log(e.target.id); //抓到btn當前ID
        //實際上呼叫的是由上層元件從props.onItemClick傳入的方法(上層元件的方法)
        this.props.onItemClick(e.target.id);//傳給父組件處理拿到要刪除的索引值
    }

    render(){
        const messages = this.props.item;//接收外部item
        const message = messages.map( (content,index) => //(當前內容,索引值)
            <li  key={content.toString()} value={content}>
                {content}
                <button  id={index} onClick={this.handleClick}>deleteItem</button>
            </li>
        ); 
        return (
        
            <div>                   
                 {message} {/* 最後炫覽的變數 */}
            </div>
        );
    }
}
export default TodoItem;
