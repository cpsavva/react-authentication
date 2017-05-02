import React from "react";
import {Link} from 'react-router';

class Main extends React.Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
    <div>
      <div className="container"><h1>Main Component</h1>
        <ol className="lead">
            <li><Link to="/signup">Registration</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to="/profile">Custom Profile Data</Link></li>
        </ol>
      </div>
      <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default Main
