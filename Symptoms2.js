import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

export class Symptoms2 extends Component {
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
              <h1>Presence of associated Co-morbidities</h1>
              <p>
                Presence of Chronic sickness/illness prior to onset of Covid
              </p>
              <Form.Select
                aria-label="Default select example"
                className="p-3"
                onChange={handleChange('symptoms2')}
                defaultValue={values.symptoms2}
              >
                <option>Select</option>
                <option value="None">None</option>
                <option value="HTN/DM/Mental illness">
                  HTN/DM/Mental illness
                </option>
                <option value="Asthma/COPD/OSAS">Asthma/COPD/OSAS</option>
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

export default Symptoms2