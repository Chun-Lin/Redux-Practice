import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractCounter}
        />
        <div>
          <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
            STORE RESULT
          </button>
        </div>
        <ul>
          {this.props.storeResults.map(result => {
            return <li key={result.id}>{result.value}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storeResults: state.results,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    onAddCounter: () => dispatch({ type: 'ADD' }),
    onSubstractCounter: () => dispatch({ type: 'SUBSTRACT' }),
    onStoreResult: result => dispatch({ type: 'STORE_RESULT', result: result }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
