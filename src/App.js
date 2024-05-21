import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {decrement , increment} from "./redux/action/CounterAction"
// import MyComponents from './pages/MyComponents';

const MyComponents = React.lazy(() => import("./pages/MyComponents"))

function App() {

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense fallback={"...Loading"}>
          <MyComponents count={count} />
        </Suspense>

        <div>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(increment())}>Increment</button>

        </div>

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
