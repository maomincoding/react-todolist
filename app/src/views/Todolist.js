import React,{Component,Fragment} from 'react'
import '../assets/css/todolist.css'
class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue:"",
      list:[]
    }
  }
  render(){
    return (
      <Fragment>
        <div className="header">
           <h2>Todolist</h2>
           <input type="text" value={this.state.inputValue} onChange={this.handerChange}/>
           <button>提交</button>
        </div>
        <ul className="list">
          <li>111111111111111111111</li>
        </ul>
      </Fragment>
    )
  }
}
export default TodoList