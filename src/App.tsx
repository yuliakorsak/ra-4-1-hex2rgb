import { useState } from 'react';
import './App.css';

export default function App() {
  const state = useState<string>('');

  const checkInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    if (target.value.match(/^#[0-9a-fA-F]{6}$/)) {
      const r = parseInt(value.slice(1, 3), 16);
      const g = parseInt(value.slice(3, 5), 16);
      const b = parseInt(value.slice(5, 7), 16);
      state[1](`rgb(${r}, ${g}, ${b})`);
    } else if (target.value.length >= 7) {
      state[1]('Ошибка!');
    }
  }

  return (
    <div id="container" style={{ backgroundColor: state[0] === "Ошибка!" ?  "#e74c3c" : state[0]}}>
      <form id="appForm">
        <input id="input" type="text" onChange={checkInput} />
        <div id="output">{state[0]}</div>
      </form>
    </div>
  )
}
