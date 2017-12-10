import * as React from 'react';

import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onDecrement?: () => void;
  onIncrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be more enthusiastic!');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExcalamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

function getExcalamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Hello;
