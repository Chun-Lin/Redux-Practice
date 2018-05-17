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
        results: [...state.results, { id: new Date(), value: state.counter }],
      }
  }

  return state
}

export default reducer
