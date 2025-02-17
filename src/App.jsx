import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App=()=> {
  

  const {counter} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>count is {counter}</h1>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
            Increment
        </button>
        <button onClick={() => dispatch(reset())}>
            Reset
        </button>
        <button onClick={() => dispatch(increment(2))}>
            Increment by 2
        </button>
        <button onClick={() => dispatch(decrement())}>
            decrement
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


