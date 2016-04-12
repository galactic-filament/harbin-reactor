import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HelloWorld from '../components/HelloWorld'
import Counter from '../components/Counter'
import * as Actions from '../actions'

class App extends Component {
  render() {
    const { count, actions } = this.props
    return (
      <div>
        <HelloWorld />
        <Counter count={count} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  count: PropTypes.number,
  actions: PropTypes.shape({})
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
