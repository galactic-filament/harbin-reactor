import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
  render() {
    const { count, actions } = this.props

    return (
      <div>
        <h1>Count: {count}</h1>
        <button type="button" onClick={actions.incrementCount}>Increment</button>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  actions: PropTypes.shape({}).isRequired
}
