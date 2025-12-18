import { useState } from 'react'

import './App.css'

  const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    console.log("Before re-render (stale value):", count);
  }

  const decrease = () => {
    if (count > 0) setCount(count - 1);
  }

    const increasebyfive = () => {
    setCount(count + 5);
    console.log("Before re-render (stale value):", count);
  }
    const decreasebyfive = () => {
    if (count > 4) setCount(count - 5);
    console.log("Before re-render (stale value):", count);
  }


    function reset() {
      setCount(0);
    }
      return (
        <div className="App">
          <div className="counter-container">
            <button onClick={increase}>+1</button>
            <button onClick={increasebyfive}>+5</button>
            <h1 className='value'>{count}</h1>
            <button onClick={decreasebyfive}>-5</button>
            <button onClick={decrease}>-1</button>
          </div>
          <button id='reset' onClick={reset}>Reset</button>
        </div>
      );
    }


export default App;
