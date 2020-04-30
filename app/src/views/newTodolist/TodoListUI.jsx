import React from 'react'
import { Button, Input, List, Divider } from 'antd'

export default class TodolistUI extends React.Component {
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <Input value={this.props.inputValue} placeholder="Basic usage" style={{ width: '300px' }} onChange={this.props.handerChange} />
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={this.props.handerClick}>提交</Button>
        <Divider orientation="left">列表</Divider>
        <List
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={()=>{this.props.delete(index)}} >
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}