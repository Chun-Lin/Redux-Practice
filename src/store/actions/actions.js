export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBSTRACT = 'SUBSTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

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

export const saveResult = result => ({
  type: STORE_RESULT,
  result: result,
})

export const storeResult = result => dispatch => {
  setTimeout(() => {
    dispatch(saveResult(result))
  }, 2000)
}

export const deleteResult = id => ({
  type: DELETE_RESULT,
  resultID: id,
})
