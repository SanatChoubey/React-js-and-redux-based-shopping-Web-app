import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './Container/Store'
import App from './Component/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise'
import { BrowserRouter ,Route} from 'react-router-dom'
import rootreducer from './Reducer'
import Checkout from './Component/Checkout'
import Detail from './Component/Detail'
import Bulk from './Container/Bulk'
import State from './Container/State'
import Custom from './Container/Custom'
import Blog from './Component/Blog'
import Myaccount from './Component/Myaccount'

import Wear from './Container/Wear'
import Pro from './Container/Pro'

  const createStorewithmiddleware = applyMiddleware(promiseMiddleware)(createStore);
ReactDOM.render(
  <Provider store={createStorewithmiddleware(rootreducer)}>
<BrowserRouter>
<div>
<Route exact path ='/' component = {App}/>
<Route exact path='/stores'component={Store}/>

<Route exact path ='/wear'component={Wear}/>
<Route exact path ='/pro'component={Pro}/>
<Route exact path ='/bulk'component={Bulk}/>
<Route exact path ='/state'component={State}/>
<Route exact path ='/Custom'component={Custom}/>
<Route exact path ='/Blog'component={Blog}/>
<Route exact path ='/Account'component={Myaccount}/>

<Route exact path='/detail'component={Detail}/>
<Route exact path='/checkout'component={Checkout}/>

</div>


</BrowserRouter>
</Provider>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
