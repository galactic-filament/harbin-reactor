import { incrementEnthusiasm } from '../actions/index';
import { StoreState } from '../types/index';
import { enthusiasm } from './index';

it('Increments properly', () => {
    let state: StoreState = {
        languageName: 'TypeScript',
        enthusiasmLevel: 1
    };
    state = enthusiasm(state, incrementEnthusiasm());
    expect(state.enthusiasmLevel).toEqual(2);
});
