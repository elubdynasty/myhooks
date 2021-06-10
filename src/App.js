import { useEffect, useReducer } from 'react';

import './App.css';

//global scope 

const initialState = {
  count: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

//global scope

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = `You clicked ${state.count} times`;
  });


  return (
    <div className="App">
    
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>

    </div>
  );
}

export default App;