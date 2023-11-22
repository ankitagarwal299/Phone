import React, { useState } from 'react';
import './style.css';

//(415) -996-4565
//ALGoEXPERT

export default function App() {
  const [value, setValue] = useState('');

  function format(str) {
    let output = '';

    let rawString = str.replace(/\D/g, '');
    console.log(rawString);

    if (rawString.length > 0) {
      output = output + '(' + rawString.substring(0, 3);
    }
    console.log(rawString);

    if (rawString.length > 3) {
      output = output + ') ' + rawString.substring(3, 6);
    }
    console.log(rawString);

    if (rawString.length > 6) {
      output = output + '-' + rawString.substring(6, 10);
    }
    console.log(rawString);

    return output;
  }

  function getPhoneInput(e) {
    console.log(e.target.value);
    setValue(format(e.target.value));
  }
  return (
    <div className="App">
      <input
        type="tel"
        value={value}
        onChange={(e) => getPhoneInput(e)}
        placeholder="(415) 996-4565"
      />
      <button
        type="button"
        className="app-phone-btn"
        disabled={value?.length < 14}
        onClick={() => setValue('')}
      >
        Submit
      </button>
    </div>
  );
}
