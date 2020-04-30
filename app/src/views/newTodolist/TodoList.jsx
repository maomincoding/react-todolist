import React, { Component } from 'react'
import { Button, Input, List , Divider } from 'antd';
import store from '../../store/index'
import {CHANGE_INPUT_VALUE,CHANGE_ITEM_VALUE,DELETE_ITEM_VALUE} from '../../store/actionType'

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState(); // 获取store

    this.handerChange = this.handerChange.bind(this);
    this.handerStateChange = this.handerStateChange.bind(this);
    this.handerClick = this.handerClick.bind(this);

    store.subscribe(this.handerStateChange) //  订阅 store store 只要发生改变。方法内的函数自动执行。
  }
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <Input value={this.state.inputValue}  placeholder="Basic usage" style={{ width: '300px' }}  onChange={this.handerChange}/>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={this.handerClick}>提交</Button>
        <Divider orientation="left">列表</Divider>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item onClick={this.delete.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
  // 组件更新状态
    handerStateChange(){
      this.setState(store.getState()); // 重新获取store，组件更新状态，替换原来的数据
  }
  // input值检测
  handerChange(e){
    // 创建action
    const action = {
      type: CHANGE_INPUT_VALUE, // 描述
      value: e.target.value
    }
    store.dispatch(action); // 将action 传给store 
  }
  // 提交
  handerClick(){
    const action = {
      type: CHANGE_ITEM_VALUE,
    }
    store.dispatch(action);
  }
  // 删除
  delete(i){
    const action = {
      type: DELETE_ITEM_VALUE,
      i
    }
    store.dispatch(action);
  }
  // 组件挂载之后
  componentDidMount() {
    document.title = "使用Ant 搭建TodoList"
  }
}