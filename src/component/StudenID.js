import Welcome from './Welcome';
import React,{Component} from 'react';
// C:\Users\user\Desktop\React\basics\src\component\StudentID.css
class StudenID extends Component { //利用其他組件去創建一個 新的組件
    
    render (){
            // const {name} = this.props; //解構把輸入的name輸入
            // const test = {
            //     fontSize: 100,
            //     color:'#445200',
            // };
            return(
                <div>
                <Welcome  name="國漁" sID="1410532032" />
                <Welcome  name="郭懂"  sID="1410532029" />
                </div>
            )
        };
    }

export default StudenID;