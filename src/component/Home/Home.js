import React,{Component} from 'react';
import SimpleAppBar from './SimpleAppBar';
import './Home.css';
class Home extends Component { //完整組件
    
    render (){
           
            return(
              <div className="Home">
                  <h1>我是Home</h1>
                  <SimpleAppBar/>
              </div>
            );
        }
    }

export default Home;