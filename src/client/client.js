//starting point for client side application
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {renderRoutes} from 'react-router-config';
import Routes from './Routes';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers';




export const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));
store.subscribe(()=>{
  console.log(store.getState());
})

ReactDOM.hydrate(
    <Provider store={store} suppressHydrationWarning={true}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


console.log(process.env.REACT_APP_STRIPE_KEY)

