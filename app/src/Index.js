import React from 'react'
import HelloWorld from './HelloWorld'
import Counter from './Counter'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Counter initialCount={0} />
      </div>
    )
  }
}
