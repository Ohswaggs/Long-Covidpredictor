import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export class Patient_Physician extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="App">
        <Container>
          <div className="wrapper">
            <Form className="form-holder">
              <h1>Are you a Patient or Physician</h1>
              <p>Are you a practising Physician or a curious Patient</p>
              <Form.Select
                aria-label="patient"
                className="p-3"
                onChange={handleChange('patient')}
                defaultValue={values.patient}
              >
                <option>Select</option>
                <option value="Patient">Patient</option>
                <option value="Physician">Physician</option>
              </Form.Select>
            </Form>
            <Button style={styles.button} onClick={this.continue}>
              Next
            </Button>{' '}
            <Button style={styles.button} onClick={this.back}>
              Previous
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

export default Patient_Physician;
