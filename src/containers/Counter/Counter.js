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
          <button onClick={this.props.onStoreResult}>STORE RESULT</button>
        </div>

        {this.props.storeResults.map(result => {
          return <li key={result.id}>{result.value}</li>
        })}
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
    onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
