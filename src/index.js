import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';

import { store } from './store/store';
// import { PokemonApp } from './PokemonApp';
import { TodosApp } from './TodosApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodosApp/>
    </Provider>
  </React.StrictMode>
);