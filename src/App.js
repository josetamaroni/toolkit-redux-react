import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice';

import logo from './logo.svg';
import './App.css';


function App() {

  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Counter: {counter}
        </p>
        <button onClick={ ()=> dispatch( increment() ) }>Increment</button>
        <button onClick={ ()=> dispatch( decrement() ) }>Decrement</button>
        <button onClick={ ()=> dispatch( incrementByAmount(2) ) }>Increment by 2</button>
      </header>
    </div>
  );
}

export default App;
