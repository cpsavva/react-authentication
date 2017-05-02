import Auth from './Auth';
import Wrapper from "../components/Wrapper";
import Login from '../components/Login';
import Signup from '../components/Signup';
import Profile from '../components/Profile';
import Main from '../components/Main';


const routes = {
  // base component (wrapper for the whole application).
  component: Wrapper,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, Profile);
        } else {
          callback(null, Main);
        }
      }
    },

    {
      path: '/login',
      component: Login
    },

    {
      path: '/signup',
      component: Signup
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;