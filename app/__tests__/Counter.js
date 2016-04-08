/*global describe it expect*/

import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Counter from '../src/Counter.jsx'

describe('Counter', () => {
  it('adds', () => {
    const initialCount = 0
    const counter = TestUtils.renderIntoDocument(
      <Counter initialCount={initialCount} />
    )
    counter.handleTick()
    expect(counter.state.count).toEqual(initialCount + 1)
  })
})
