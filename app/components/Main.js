import React from "react";

class Main extends React.Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
    <div>
      <div className="container"><h1>Main Component</h1>
      </div>
      <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default Main
