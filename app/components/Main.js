import React from "react";
import {Link} from 'react-router';

class Main extends React.Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
    <div>
        <h1>Hello this is Main component</h1>
      <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default Main
