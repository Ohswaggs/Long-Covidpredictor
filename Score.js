import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../cal.png';

export class Score extends Component {
  // continue = (e) => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };
  render() {
    const {
      values: { gender, symptoms_No, symptoms2, bmi, vaccine, age },
    } = this.props;
    let score = 0;

    // assign age point
    if (age === '18 to 49 years') {
      score = score + 1;
    } else if (age === '50 to 60 years') {
      score = score + 1.5;
    } else if (age === '>/= 70 years') {
      score = score + 2.0;
    }
    // assign gender point
    if (gender === 'Female') {
      score = score + 1.5;
    } else if (gender === 'Male') {
      score = score + 1;
    }

    // assign no of symptoms point
    if (symptoms_No === 'less than 5') {
      score = score + 1;
    } else if (symptoms_No === '5 or more') {
      score = score + 2;
    }

    // assign bmi point
    if (bmi === 'Less than 25.0 kg/m2') {
      score = score + 1;
    } else if (bmi === '>/= 25.0 kg/m2') {
      score = score + 2;
    }

    // assign symptoms2 point
    if (symptoms2 === 'None') {
      score = score + 1;
    } else if (symptoms2 === 'HTN/DM/Mental illness') {
      score = score + 2;
    } else if (symptoms2 === 'Asthma/COPD/OSAS') {
      score = score + 2;
    }

    // assign vaccine point
    if (vaccine === 'Yes') {
      score = score + 1;
    } else if (vaccine === 'No') {
      score = score + 2;
    }

    let status = '';

    if (score < 7) {
      status = 'No Risk of Long Covid';
    } else if (score < 8) {
      status = 'Mild Risk of Long Covid';
    } else if (score < 9) {
      status = 'Moderate Risk of Long Covid';
    } else if (score >= 9) {
      status = 'Severe Risk of Long Covid';
    }

    return (
      <div className="App">
        <Container>
          <div className="wrapper">
            <img src={logo} alt="logo" width="150px" className="my-4" />
            <h1>Your estimated Long Covid score is {score}</h1>
            <h2>{status}</h2>
            <h3>
              observe for persistent symptoms and report to doctor where
              necessary
            </h3>
            {/* <Button
              variant="primary"
              style={styles.button}
              onClick={this.continue}
            >
              Proceed
            </Button>{' '} */}
          </div>
        </Container>
      </div>
    );
  }
}


export default Score;
