import React, { Component } from 'react';
import { Button, Container} from 'react-bootstrap';
import logo from '../cal.png';

export class Start extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <div className="App">
        <Container>
          <div className="wrapper">
            <img src={logo} alt="logo" width="150px" className="my-4" />
            <h1>Long Covid Predictor</h1>
            <p>Access your risk of developing Long Covid</p>
            <Button
              variant="outline-primary"
              style={styles.button}
              onClick={this.continue}
              className="my-4 py-3"
            >
              Find out what's your Long Covid score ↦
            </Button>{' '}
          </div>
        </Container>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default Start;
