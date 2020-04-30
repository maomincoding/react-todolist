import React, { Component } from 'react'
import { Button, Input, List , Divider } from 'antd';
import store from '../../store/index'

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState(); // 获取store
    this.handerChange = this.handerChange.bind(this);
    this.handerStateChange = this.handerStateChange.bind(this);
    store.subscribe(this.handerStateChange) //  订阅 store store 只要发生改变。方法内的函数自动执行。
  }
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <Input value={this.state.inputValue}  placeholder="Basic usage" style={{ width: '300px' }}  onChange={this.handerChange}/>
        <Button type="primary" style={{ marginLeft: '20px' }}>提交</Button>
        <Divider orientation="left">列表</Divider>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
  handerChange(e){
    // 创建action
    const action = {
      type:'change_input_value', // 描述
      value: e.target.value
    }
    store.dispatch(action); // 将action 传给store 
  }
  handerStateChange(){
    this.setState(store.getState()); // 重新获取store，组件更新状态，替换原来的数据
  }
  componentDidMount() {
    document.title = "使用Ant 搭建TodoList"
  }
}