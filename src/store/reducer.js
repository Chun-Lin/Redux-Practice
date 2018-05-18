import shortid from 'shortid'

const initialState = {
  counter: 0,
  results: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      }

    case 'ADD':
      return {
        ...state,
        counter: state.counter + 5,
      }
    case 'SUBSTRACT':
      return {
        ...state,
        counter: state.counter - 5,
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: [
          ...state.results,
          { id: shortid.generate(), value: action.result },
        ],
      }
    case 'DELETE_RESULT':
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
