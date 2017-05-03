import React from "react";
import {Link} from 'react-router';

class Main extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
    <div>
        <h1>Hello this is Main component</h1>
      <div className="container">{this.props.children}</div>
      <div>


            <div className="top-bar-right">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </div>

        </div>
      </div>
    );
  }
}

export default Main
