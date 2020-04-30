import {CHANGE_INPUT_VALUE,CHANGE_ITEM_VALUE,DELETE_ITEM_VALUE} from './actionType' 

// Reducer  存数据以及处理数据。 reducer可以接受state，但不能修改state。 只有store可以改变自己的内容, 所以下面深拷贝一个副本。
const defaultState = {
  inputValue:"",
  list:[]
}

// 首先必须返回纯函数，给定固定的输入，就一定会有固定的输出。而且不会有副作用(直接对state修改).
export default (state=defaultState,action) => {
  // input框内值
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.inputValue = action.value;
    return newState //返回给store，让store自己更新。
  }
  // 列表项
  if(action.type === CHANGE_ITEM_VALUE){
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue = ""
    return newState
  }
  // 删除
  if(action.type === DELETE_ITEM_VALUE){
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.list.splice(action.i,1);
    return newState
  }
  return state //初始化
}

// state参数表示store里的上一次数据 ， actions 是组件传过来需要修改的值