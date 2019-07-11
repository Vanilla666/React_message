import React,{Component} from 'react';

class MessageForm extends Component{
    constructor(props){
        super(props);//繼承props
        this.state = {
            name:'',
            content:'',
        };//內部自定義的變數
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        });//改變 State name
        console.log('name: ',this.state.name);
    }

    handleContent = (event) => {
        this.setState({
            content: event.target.value
        });
        console.log('content: ',this.state.content);
    }

    handleSumit = () => { //箭頭函數這樣就不用this綁定
        let inputMessage={name:this.state.name,content:this.state.content};//輸出現在的name content
        this.props.sss(inputMessage); // sss外部處理
    }

    render(){//生命週期 負責炫覽畫面的
        const {handleName,handleContent,handleSumit} = this;
        return ( //負責輸出的內容
        
            <div>                   
                 name:
                 <input onChange={handleName}></input>
                 content:
                 <input onChange={handleContent}></input>
                 <button onClick={handleSumit}>sent</button>
            </div>
        );
    }
}
export default MessageForm;
