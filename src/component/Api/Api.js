import React,{Component} from 'react';
import axios from 'axios';

class Api extends Component { //完整組件
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          todos: []
        };
      }
    
      componentDidMount() {
  
      axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(res =>{
          console.log(res.data);
          this.setState({ todos: res.data }) //存入本地端
          console.log(this.state.todos) //印出存到state的API
      }).catch(err => {
          console.log(err);
      })
      // fetch('http://jsonplaceholder.typicode.com/todos')
      // .then(res => res.json()) // Body mixin 的 json() 會拿 Response stream 
      // //並完整地讀取他。它會回傳一個能夠實現 (resolve) 
      // //把回傳的結果的 body text 解析成 JSON 型別的 Promise
      // // .then(res => res.json())將輸出解析為JSON
      // .then((data) => {
      //   this.setState({ todos: data })
      //   console.log(this.state.todos) //印出存到state的API
      // })
      // .catch(console.log)
    
      }
  

    render (){
        const { todos } = this.state;
        console.log(`API: ${ JSON.stringify( todos)}`);
            return(
                <div className="container">
                <div className="col-xs-12">
                <h1>My Todos</h1>
                {this.state.todos.map( (todo,index) => (
                  <div key={index} className="card">
                    <div className="card-body">
                      <h5 className="card-title">{todo.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                      { todo.completed &&
                        <span>
                        Completed
                        </span>
                      }
                      { !todo.completed &&
                        <span>
                          Pending
                        </span>
                      }              
                      </h6>
                    </div>
                  </div>
                ))}
                </div>
               </div>
            );
        }
    }

export default Api;