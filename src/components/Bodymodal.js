import React, { Component } from 'react';

class Bodymodal extends Component {
  render() {
    return (
      <div>
       <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Bodymodal;