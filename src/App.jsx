import './App.css'
import React, { useState } from 'react';

function App() {
  const [entryValue, setEntryValue] = useState('');

  const DisplayClick = (value) => {
    if (value === '%') {

      setEntryValue((prevValue) => (eval(prevValue) / 100).toString());
    } else {
      setEntryValue((prevValue) => prevValue + value);
    }
  };
  const Cls = () => {
    setEntryValue('');
  };
  const Cal = () => {
    try {
      setEntryValue(eval(entryValue).toString());
    } catch (error) {
      setEntryValue("")
      setEntryValue('Syntax error');

    }
  };
  const delNum = () => {
    setEntryValue((prevValue) => prevValue.slice(0, -1)||"");
  };


  return (
    <div className='container'>
      <div className='calculator'>
        <input type="text" value={entryValue} readOnly placeholder='0' />

        <div>
          <button className='button operator' onClick={Cls}>AC</button>
          <button className='button operator' onClick={delNum}><i class="fa-solid fa-delete-left"></i></button>
          <button className='button operator' onClick={() => DisplayClick('%')}>%</button>
          <button className='button operator' onClick={() => DisplayClick('/')}>/</button>

        </div>

        <div>
        {[7, 8, 9].map((num) => (
            <button key={num} className='button' onClick={() => DisplayClick(num)}>
              {num}
            </button>
          ))}
        <button className='button operator' onClick={() => DisplayClick('*')}>X</button>
        </div>
        <div>
        {[4, 5, 6].map((num) => (
            <button key={num} className='button' onClick={() => DisplayClick(num)}>
              {num}
            </button>
          ))}
        <button className='button operator' onClick={() => DisplayClick('-')}>-</button>

        </div>
        <div>
        {[1, 2, 3].map((num) => (
            <button key={num} className='button' onClick={() => DisplayClick(num)}>
              {num}
            </button>
          ))}
        <button className='button operator' onClick={() => DisplayClick('+')}>+</button>

        </div>
        <div>
        <button className='button' onClick={() => DisplayClick('00')}>00</button>
          <button className='button' onClick={() => DisplayClick(0)}>0</button>
          <button className='button' onClick={() => DisplayClick('.')}>.</button>
          <button className='button equalbtn' onClick={Cal}>=</button>

        </div>

      </div>

    </div>
  )
}

export default App
