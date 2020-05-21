import React, { Component } from 'react';
import 'bootstrap-4-react';

import { Modal, Button } from "react-bootstrap";
import Bodymodal from './components/Bodymodal';

class App extends Component {

    state = {
        show: false
      };
 

  handleModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    
    return (
      
      <div>
      
        <Button onClick={this.handleModal}>open modal</Button>
        <Modal show={this.state.show}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body><Bodymodal>content: Lorem ipsum dolor sit amet consectetur
     adipisicing elit. Ullam, architecto eos! Possimus molliti
      laudantium deleniti, nulla illo esse excepturi error volup
      tatibus labore quibusdam beatae nisi dolor maxime adipisci 
      nemo delectus!</Bodymodal></Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleModal}>close modal</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;