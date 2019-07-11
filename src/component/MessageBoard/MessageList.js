import React,{Component} from 'react';

class MessageList extends Component{
    constructor(props){
        super(props);//繼承props
        this.state = {

        };//內部自定義的變數
    }
    render(){
        const messages = this.props.item;//接收外部item
        const message = messages.map( (m,index) => //(當前內容,索引值)
            <div key={index}>
                name:{m.name}<br/>
                content:{m.content}
            </div>
        ); 
        return (
        
            <div>                   
                 {message} {/* 最後炫覽的變數 */}
            </div>
        );
    }
}
export default MessageList;
