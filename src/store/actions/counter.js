import { INCREMENT, DECREMENT, ADD, SUBSTRACT } from './actionTypes'

export const increment = () => ({
  type: INCREMENT,
})

export const decrement = () => ({
  type: DECREMENT,
})

export const add = value => ({
  type: ADD,
  value: value,
})

export const subtract = value => ({
  type: SUBSTRACT,
  value: value,
})
