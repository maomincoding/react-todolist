import {CHANGE_INPUT_VALUE,CHANGE_ITEM_VALUE,DELETE_ITEM_VALUE,ADD_ITEM_VALUE} from './actionType'
import axios from 'axios'

export const getInputChangeAction = (value) =>({
  type:CHANGE_INPUT_VALUE,
  value
})
export const getItemChangeAction = () =>({
  type: CHANGE_ITEM_VALUE
})
export const getItemDeleteAction = (i) =>({
  type: DELETE_ITEM_VALUE,
  i
})
export const getListValue = (data) =>({
  type:ADD_ITEM_VALUE,
  data
})
// redux-thunk  使得可以在action内写异步请求
export const getTodolist= () =>{
  return (dispatch) =>{
    axios.get('/api').then((res)=>{
      console.log(res.data);
      const data = res.data;
      const action = getListValue(data);
      dispatch(action);
    })
  }
}