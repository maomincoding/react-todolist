import React, { Component } from 'react'
import { Button, Input, List , Divider } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


export default class TodoList extends Component {
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <Input placeholder="Basic usage" style={{ width: '300px' }} />
        <Button type="primary" style={{ marginLeft: '20px' }}>提交</Button>
        <Divider orientation="left">列表</Divider>
        <List
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}