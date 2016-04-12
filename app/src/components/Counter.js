import React from 'react'

export default class Counter extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = { count: this.props.initialCount }
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.handleClick.bind(this)}>Increment</button>
      </div>
    )
  }
}

Counter.propTypes = { initialCount: React.PropTypes.number }
Counter.defaultProps = { initialCount: 0 }