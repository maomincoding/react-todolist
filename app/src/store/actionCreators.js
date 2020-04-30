import {CHANGE_INPUT_VALUE,CHANGE_ITEM_VALUE,DELETE_ITEM_VALUE} from './actionType'

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