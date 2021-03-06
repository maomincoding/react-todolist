import React from 'react'
import { Button, Input, List, Divider } from 'antd'

// 无状态组件,性能高。就是一个函数，一般用在UI组件。
const TodolistUI = (props)=>{
  return (
    <div style={{ margin: '20px' }}>
    <Input value={props.inputValue} placeholder="Basic usage" style={{ width: '300px' }} onChange={props.handerChange} />
    <Button type="primary" style={{ marginLeft: '20px' }} onClick={props.handerClick}>提交</Button>
    <Divider orientation="left">列表</Divider>
    <List
      bordered
      dataSource={props.list}
      renderItem={(item, index) => (
        <List.Item onClick={()=>{props.delete(index)}} >
          {item}
        </List.Item>
      )}
    />
  </div>
  )
}
export default TodolistUI

// export default class TodolistUI extends React.Component {
//   render() {
//     return (
//       <div style={{ margin: '20px' }}>
//         <Input value={this.props.inputValue} placeholder="Basic usage" style={{ width: '300px' }} onChange={this.props.handerChange} />
//         <Button type="primary" style={{ marginLeft: '20px' }} onClick={this.props.handerClick}>提交</Button>
//         <Divider orientation="left">列表</Divider>
//         <List
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={()=>{this.props.delete(index)}} >
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }