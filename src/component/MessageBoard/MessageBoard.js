import React,{Component} from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class MessageBoard extends Component{
    constructor(props){
        super(props);//繼承props
        this.state = {

        };//內部自定義的變數
    }
    render(){
        return (
        
            <div>                   
                  MessageBoard!!
                  <MessageList/>
                  <MessageForm/>
            </div>
        );
    }
}
export default MessageBoard;
