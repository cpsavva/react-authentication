import React from "react";

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

        </div>
      </div>
    );
  }
}

export default Main
