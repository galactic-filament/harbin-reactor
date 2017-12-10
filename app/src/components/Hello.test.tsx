import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as sinon from 'sinon';

const Adapter = require('enzyme-adapter-react-15');

import Hello from './Hello';

configure({ adapter: new Adapter() });

it('Renders correctly when no enthusiasm level is given', () => {
    const hello = shallow(<Hello name="Adrian" />);
    expect(hello.find('.greeting').text()).toEqual('Hello Adrian!');
});

it('Renders correctly when 2 enthusiasm level is given', () => {
    const hello = shallow(<Hello name="Adrian" enthusiasmLevel={2} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Adrian!!');
});

it('Renders correctly when 1 enthusiasm level is given', () => {
    expect(() => shallow(<Hello name="Adrian" enthusiasmLevel={0} />))
        .toThrowError('You could be more enthusiastic!');
});

it('Calls onDecrement when - button is clicked', () => {
    const decrementStub = sinon.stub();
    const hello = shallow(<Hello name="Adrian" enthusiasmLevel={1} onDecrement={decrementStub} />);
    hello.find('#decrement').first().simulate('click');
    expect(decrementStub.calledOnce);
});

it('Calls onIncrement when - button is clicked', () => {
    const incrementStub = sinon.stub();
    const hello = shallow(<Hello name="Adrian" enthusiasmLevel={1} onIncrement={incrementStub} />);
    hello.find('#increment').first().simulate("click");
    expect(incrementStub.calledOnce);
});
