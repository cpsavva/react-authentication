// Inclue the React library
import React from 'react';


// Include the react-router module
import {Route, Router, IndexRoute, browserHistory,hashHistory} from 'react-router';
import * as RR from 'react-router';
// console.log(RR);
// Reference the high-level components
import Wrapper from "../components/Wrapper";
import Login from '../components/Login';
import Signup from '../components/Signup';
import Profile from '../components/Profile';
import Main from '../components/Main';



// Export the Routes
export default (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Wrapper}>
    	<Route path="/main" component={Main}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/profile' component={Profile}/>
		<IndexRoute component={Main} />
	</Route>
  </Router>


);
