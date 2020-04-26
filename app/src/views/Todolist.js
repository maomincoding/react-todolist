import React,{Component,Fragment} from 'react'
import Todoitem from '../components/Todoitem'
import Text from '../components/Text'
import '../assets/css/todolist.css'
class TodoList extends Component{
  constructor(props){
    super(props);
    // 当state或者props发生改变的时候，render函数就会重新执行。
    this.handerClick=this.handerClick.bind(this);
    this.handerChange=this.handerChange.bind(this);
    this.delete=this.delete.bind(this);
    this.state = {
      inputValue:"",
      list:[]
    }
  }
  render(){
    console.log(this,'render')
    return (
      <Fragment>
        {/*头部*/}
        <div className="header">
           <h2>Todolist</h2>
           <label htmlFor="inputArea">输入内容：</label>
           <input 
              type="text" 
              id="inputArea" 
              value={this.state.inputValue} 
              onChange={this.handerChange}/>
           <button onClick={this.handerClick}>提交</button>
        </div>
        <Text content={this.state.inputValue}/>  
        {/*列表*/}
        <ul className="list">
         {this.getItem()}
        </ul>
      </Fragment>
    )
  }
  getItem(){
    return this.state.list.map((item,index) => {
      return (
         <Todoitem item={item} index={index} key={index} deleteItem={this.delete} />  
      )
      });
  }
  // input的值双向绑定
  handerChange(e){
    const value = e.target.value;
    this.setState(()=>({
      inputValue:value
    }));
  }
  // 提交
  handerClick(){
    this.setState((prevState)=>({
      inputValue:"",
      list:[...prevState.list,prevState.inputValue]
    }));
  }
  // 删除
  delete(index){
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1);
      return {list}
    });
  }

}
export default TodoList