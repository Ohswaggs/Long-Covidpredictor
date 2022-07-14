import React, { Component } from 'react'
import { Button, Container, Form} from 'react-bootstrap';

export class BMI extends Component {
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
            <Form>
              <h1>What is your estimated Body Mass Index (BMI)</h1>
              <p>BMI(Kg/m2)</p>
              <Form.Select
                aria-label="Default select example"
                className="p-3"
                onChange={handleChange('bmi')}
                defaultValue={values.bmi}
              >
                <option>Select</option>
                <option value="Less than 25.0 kg/m2">
                  Less than 25.0 kg/m2
                </option>
                <option value=">/= 25.0 kg/m2">25.0 kg/m2 above</option>
              </Form.Select>
            </Form>
            <Button
              variant="outline-primary"
              size="lg"
              className="px-5"
              style={styles.button}
              onClick={this.continue}
            >
              Next
            </Button>{' '}
            <Button
              variant="outline-primary"
              size="lg"
              className="px-5"
              style={styles.button}
              onClick={this.back}
            >
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

export default BMI