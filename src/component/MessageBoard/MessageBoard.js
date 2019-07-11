import React,{Component} from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class MessageBoard extends Component{
    constructor(props){
        super(props);//繼承props
        this.state = {
            item:[{name:'John',content:'Wellcome'},{name:'Seal',content:'ohoh'}],
        };//內部自定義的變數
    }
    
    handleItem = (inputMessage) => {
        let currentMessage=this.state.item; //一開始有資料先丟入陣列
        currentMessage.push(inputMessage); //接收丟入的值
        this.setState({ //改變內部變數
            item:currentMessage,
        });
    }

    render(){
        const {handleItem} = this;
        return (
        
            <div>                   
                  
                  <MessageList item={this.state.item} />
                  <MessageForm sss={handleItem} /> {/* 左邊是props sss 從 Board過來的 */}
            </div>
        );
    }
}
export default MessageBoard;
