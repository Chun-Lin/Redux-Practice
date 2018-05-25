import shortid from 'shortid'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
