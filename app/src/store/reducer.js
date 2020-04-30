// Reducer  存数据以及处理数据。 reducer可以接受state，但不能修改state
const defaultState = {
  inputValue:"",
  list:['1','2']
}

// 首先必须返回函数
export default (state=defaultState,action) => {
  if(action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState
  }
  return state
}

// state参数表示store里的上一次数据 ， actions 是组件传过来需要修改的值