import React, { Component } from 'react'
import store from '../../store/index'
import {getInputChangeAction,getItemChangeAction,getItemDeleteAction,getListValue} from '../../store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState(); // 获取store
    this.handerChange = this.handerChange.bind(this);
    this.handerStateChange = this.handerStateChange.bind(this);
    this.handerClick = this.handerClick.bind(this);
    this.delete = this.delete.bind(this);

    store.subscribe(this.handerStateChange) //  订阅 store store 只要发生改变。方法内的函数自动执行。
  }
  render() {
    return <TodoListUI 
     inputValue={this.state.inputValue}
     handerChange={this.handerChange}
     handerClick={this.handerClick}
     list={this.state.list}
     delete={this.delete}
    />
  }
  // 组件更新状态
  handerStateChange(){
      this.setState(store.getState()); // 重新获取store，组件更新状态，替换原来的数据
  }
  // input值检测
  handerChange(e){
    // 创建action
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action); // 将action 传给store 
  }
  // 提交
  handerClick(){
    // 创建action
    const action = getItemChangeAction();
    store.dispatch(action); // 将action 传给store 
  }
  // 删除
  delete(i){
    console.log(i)
    // 创建action
    const action = getItemDeleteAction(i)
    store.dispatch(action); // 将action 传给store 
  }
  // 组件挂载之后
  componentDidMount() {
    document.title = "使用Ant 搭建TodoList";
    axios.get('/api').then((res)=>{
      console.log(res.data);
      const data = res.data;
      const action = getListValue(data);
      store.dispatch(action);
    })
  }
}