import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const rootReducer = combineReducers({
  counter: counterReducer,
  results: resultReducer,
})

// const logger = store => {
//   return next => {
//     return action => {
//       console.log('[Middleware] Dispatching', action)
//       const result = next(action)
//       console.log('[Middleware] next state', store.getState())
//       return result
//     }
//   }
// }

const logger = store => next => action => {
  console.log(next)
  console.log('[Middleware] Dispatching', action)
  next(action)
  console.log('[Middleware] next state', store.getState())
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
