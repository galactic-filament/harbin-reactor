import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be more enthusiastic!');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExcalamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

function getExcalamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Hello;
