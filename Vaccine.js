import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap';


export class Vaccine extends Component {
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
              <h1>Whats your COVID-19 Vaccination Status</h1>
              <p>
                Have you received at least 2 doses of a Covid-19 vaccine <br />
                (Astrazeneca/Moderna/Pfizer/Janssen)
              </p>
              <Form.Select
                aria-label="Default select example"
                className="p-3"
                onChange={handleChange('vaccine')}
                defaultValue={values.vaccine}
              >
                <option>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
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

export default Vaccine