/*global describe it*/

import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Counter from '../src/components/Counter'

const setup = () => {
  const props = {
    count: 0,
    actions: {
      incrementCount: expect.createSpy()
    }
  }
  const renderer = TestUtils.createRenderer()
  renderer.render(<Counter {...props} />)

  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('Counter', () => {
  it('adds', () => {
    const { props, output } = setup()
    const [ , button ] = output.props.children
    
    button.props.onClick()
    expect(props.actions.incrementCount).toHaveBeenCalled()
  })
})
