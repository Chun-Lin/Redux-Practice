import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResult,
} from '../../store/actions/index'

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
            return (
              <li
                key={result.id}
                onClick={() => this.props.onDeleteResult(result.id)}
              >
                {result.value}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter.counter,
    storeResults: state.results.results,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubstractCounter: () => dispatch(subtract(5)),
    onStoreResult: result => dispatch(storeResult(result)),
    onDeleteResult: id => dispatch(deleteResult(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
