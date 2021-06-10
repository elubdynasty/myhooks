import { useState, useEffect } from 'react';

import './App.css';


const App = () => {

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <button onClick={()=>setCount(count - 1)}>Decrement</button>
      
    </div>
  );
}

export default App;