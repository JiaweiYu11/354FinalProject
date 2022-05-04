import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import App from './App';
import decode from 'jwt-decode';
import { syncInfoAc } from './pages/login/store/actionCreators'

const tk = localStorage.getItem('@#@TOKEN');
if (tk) {
   try {
     store.dispatch(syncInfoAc(decode(tk)))
   } catch {
     localStorage.removeItem('@#@TOKEN');
     window.location.href = '/login';
   }
 }

ReactDOM.render(
   <Provider store={store}>
   <App />
   </Provider>
   , 
   document.querySelector('#root')  
   );
