import React,{Component} from 'react';
import './Welcome.css';
// function Welcome() { // 函數組件
//     return (
//       <h1>Hello World!  </h1>
//     );
//   }

class Welcome extends Component { //完整組件
    
    render (){
            const {name,sID} = this.props; //解構把輸入的name,sID輸入
            return(
                <div className="test"> {/* 字定義css只能引入在div不可再組見被使用 */}
                    <h1>Hello{name} </h1>
                    <br/>
                    <h1>{sID}</h1>
                </div>
            )
        };
    }

export default Welcome;