import * as React from 'react';
import * as enzyme from 'enzyme';

const Adapter = require('enzyme-adapter-react-15');

import Hello from './Hello';

enzyme.configure({ adapter: new Adapter() });

it('Renders correctly when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name="Adrian" />);
    expect(hello.find('.greeting').text()).toEqual('Hello Adrian!');
});
