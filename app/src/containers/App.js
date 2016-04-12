import React from 'react'
import HelloWorld from '../components/HelloWorld'
import Counter from '../components/Counter'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Counter initialCount={0} />
      </div>
    )
  }
}
