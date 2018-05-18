import shortid from 'shortid'
import * as actionTypes from '../actions/actions'

const initialState = {
  counter: 0,
  results: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + 5,
      }
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - 5,
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [
          ...state.results,
          { id: shortid.generate(), value: action.result },
        ],
      }
    case actionTypes.DELETE_RESULT:
      const updatedResults = state.results.filter(
        result => result.id !== action.resultID,
      )
      return {
        ...state,
        results: updatedResults,
      }
  }

  return state
}

export default reducer
