import React from 'react';
import PropTypes from 'prop-types';

export default class Todoitem extends React.Component {
    constructor(props){
        super(props);
        this.handerClick=this.handerClick.bind(this);
    }
    render(){
        const {item,text} = this.props;
        return (
        <li className="ani" onClick={this.handerClick} >
            <p className="item-name">{text}</p>
            <p>{item}</p>
        </li>
        )
    }
    // 删除
    handerClick(){
        const {index,deleteItem} = this.props;
        deleteItem(index);
    }
    // 要同时满足下面两个条件才可以被执行：
    // 1、一个组件要从父组件接收参数;
    // 2、只要父组件的render函数被执行了，子组件的这个生命周期函数就会被执行
    // 第二点也可以这样说：如果这个组件第一次存在于父组件中，不会执行。如果这个组件之前已经存在于父组件中，才会执行。
    UNSAFE_componentWillReceiveProps(){
        console.log('child componentWillReceiveProps');
    }
    // 当这个组件即将从页面中剔除的时候，会被执行。
    componentWillUnmount(){
        console.log('child componentWillUnmount');
    }
}

// 检测属性类型
Todoitem.propTypes = {
    text: PropTypes.string.isRequired,
    item: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
Todoitem.defaultProps = {
    text: '便签页'
}