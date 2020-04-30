import {createStore} from 'redux'
import reducer from './reducer'
 
// 第二个参数是浏览器安装了Redux tools 需要加上
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store