import React, { Fragment } from 'react'
// import axios from 'axios'
import Todoitem from '../components/Todoitem'
import Textarea from '../components/Textarea'
import '../assets/css/todolist.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handerClick = this.handerClick.bind(this);
        this.handerChange = this.handerChange.bind(this);
        this.handerKeyDown = this.handerKeyDown.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            inputValue: "",
            list: [],
            show: true
        }
    }
    // 在组件即将被挂载到页面时自动执行
    UNSAFE_componentWillMount() {
        // console.log('ComponnetWillMount');
    }
    // 当state或者props发生改变的时候，render函数就会重新执行。
    render() {
        // console.log('Render');
        return (
            <Fragment>
                <div className={this.state.show ? 'hide' : 'show'}>正在输入......</div>
                <CSSTransition in={this.state.show} timeout={1000} classNames='fade'
                    // unmountOnExit //不绑定时移除元素
                    appear={true} // 刚开始就执行动画
                    // 动画结束后的钩子
                    onEntered={
                        (el) => { el.style.color = 'red'; el.innerHTML = '已保存'; }
                    }>
                    <div className='save'>保存中...</div>
                </CSSTransition>
                <Textarea content={this.state.inputValue} />
                {/*头部*/}
                <div className="header">
                    {/* {this.state.show ? (
                        <h2>Todolist</h2>
                    ) : null} */}
                    <label htmlFor="inputArea">输入内容：</label>
                    <input
                        type="text"
                        id="inputArea"
                        value={this.state.inputValue}
                        onKeyDown={this.handerKeyDown}
                        onChange={this.handerChange} />

                    <button onClick={this.handerClick}>提交</button>
                </div>
                {/*列表*/}
                <ul className="list" ref={(ul) => { this.ul = ul }}>
                    {this.getItem()}
                </ul>
            </Fragment>
        )
    }
    // 在组件被挂载到页面之后自动执行
    componentDidMount() {
        document.title = 'Todolist';
        // console.log('ComponentDidMount');
        // 推荐把ajax请求加在这个周期里，这样不至于写在render方法里，每次都请求。
        // axios 请求示例
        // axios.get('https://edu.qingyu.me/api/courses').then((res) => {
        //     console.log(res.data.data.list);
        //     this.setState(() => (
        //         {
        //             list: [...res.data.data.list]
        //         }
        //     ))
        // }).catch(() => {
        //     console.log('error');
        // })
    }
    // 组件被更新之前，他会自动被执行 (组件是否被更新吗？) 返回布尔类型[true:'需要被更新',false:'不需要被更新']
    shouldComponentUpdate() {
        // console.log('shouldComponentUpdate');
        return true;
    }
    // 组件被更新之前，他会自动被执行。但是他在shouldComponentUpdate之后被执行，如果shouldComponentUpdate返回true才会执行，否则不执行。
    UNSAFE_componentWillUpdate() {
        // console.log('componentWillUpdate');
    }
    // 组件更新完成之后，他会被执行。
    componentDidUpdate() {
        // console.log('componentDidUpdate');
    }
    getItem() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition in={this.state.show} timeout={1000} classNames='fade'
                                    unmountOnExit //不绑定时移除元素
                                    appear={true} // 刚开始就执行动画
                                    // 动画结束后的钩子
                                    onEntered={
                                        (el) => { el.style.color = '#fff'; el.innerHTML = '已添加便签'; }
                                    }
                                    key={index}
                                    >
                                    <Todoitem item={item} index={index} deleteItem={this.delete} />
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </Fragment>
        )
    }
    // input的值双向绑定
    handerChange(e) {
        const value = e.target.value;
        if (value.length >= 0) {
            this.debounce(null, 1500);
            clearTimeout(this.debounce);
            this.setState(() => ({
                inputValue: value,
                show: false
            }));
        }
    }
    // 按下键盘
    handerKeyDown() {
        this.debounce(() => {
            this.setState(() => ({
                show: true
            }));
        }, 1500)
    }
    // 计时函数
    debounce(fn, delay) {
        return setTimeout(fn, delay);
    }
    // 提交
    handerClick() {
        if (this.state.inputValue.length !== 0) {
            this.setState((prevState) => ({
                inputValue: "",
                show: true,
                list: [...prevState.list, prevState.inputValue]
            }), () => {
                // setState是异步的，可以把多次数据的改变合并成一次来做。降低虚拟DOM的比对频率。需要在第二项传个参数，
                // 参数是一个回调函数。执行完setState再执行回调函数。
                // console.log(this.ul.querySelectorAll('li').length)
            });
        }
    }
    // 删除
    delete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list }
        });
    }

}