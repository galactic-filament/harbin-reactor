import * as React from 'react';
import { configure, shallow } from 'enzyme';

const Adapter = require('enzyme-adapter-react-15');

import Hello from './Hello';

configure({ adapter: new Adapter() });

it('Renders correctly when no enthusiasm level is given', () => {
    const hello = shallow(<Hello name="Adrian" />);
    expect(hello.find('.greeting').text()).toEqual('Hello Adrian!');
});

it('Renders correctly when 1 enthusiasm level is given', () => {
    const hello = shallow(<Hello name="Adrian" enthusiasmLevel={2} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Adrian!!');
});

it('Renders correctly when 1 enthusiasm level is given', () => {
    expect(() => shallow(<Hello name="Adrian" enthusiasmLevel={0} />))
        .toThrowError('You could be more enthusiastic!');
});
