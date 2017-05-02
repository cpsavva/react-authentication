import React from "react";
import Auth from '../config/Auth.js';
class Wrapper extends React.Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (


    	<div>
    	    <div className="top-bar">
      			<div className="top-bar-left">
        			<IndexLink to="/">Main</IndexLink>
      			</div>

      		{Auth.isUserAuthenticated() ? (
        		<div className="top-bar-right">
          			<Link to="/logout">Log out</Link>
        		</div>
      		) : (
        		<div className="top-bar-right">
          			<Link to="/login">Log in</Link>
          			<Link to="/signup">Sign up</Link>
        		</div>
      		)}

    		</div>
    		{this.props.children}
    		</div>

    );
  }
}

export default Wrapper