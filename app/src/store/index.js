import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
 
// redux-devtools 配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  // 使用中间件 thunk
  applyMiddleware(thunk)
);
const store = createStore(reducer, enhancer);

export default store

// store 是惟一的， 只有store可以改变自己的内容。