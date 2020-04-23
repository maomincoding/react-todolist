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
           <input type="text" value={this.state.inputValue} onChange={this.handerChange.bind(this)}/>
           <button onClick={this.handerClick.bind(this)}>提交</button>
        </div>
        <ul className="list">
         {
           this.state.list.map((item,index) => {
           return <li key={index} className="ani" onClick={this.delete.bind(this,index)}>{item}</li>
           })
         }
        </ul>
      </Fragment>
    )
  }
  handerChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handerClick(){
    this.setState({
      inputValue:"",
      list:[...this.state.list,this.state.inputValue]
    })
  }
  delete(index){
    console.log(index);
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
    })
  }

}
export default TodoList