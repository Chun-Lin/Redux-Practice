import { STORE_RESULT, DELETE_RESULT } from './actionTypes'

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
