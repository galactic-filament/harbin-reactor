import React from 'react'
import HelloWorld from './HelloWorld.jsx'
import Counter from './Counter.jsx'

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
