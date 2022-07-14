import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

export class Symptoms extends Component {
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
              <h1>
                Which of these symptoms was experienced within the first week of
                Diagnosis
              </h1>
              <p>Early symptomatology</p>
              <Form.Check
                type="checkbox"
                label="Fatigue"
                onChange={handleChange('symptoms')}
                defaultValue={values.symptoms}
              />
              <Form.Check
                type="checkbox"
                label="Headache"
                onChange={handleChange('symptoms')}
                defaultValue={values.symptoms}
              />
              <Form.Check
                type="checkbox"
                label="Dyspnea"
                onChange={handleChange('symptoms')}
                defaultValue={values.symptoms}
              />
              <Form.Check
                type="checkbox"
                label="Hoarse  Voice"
                onChange={handleChange('symptoms')}
                defaultValue={values.symptoms}
              />
              <Form.Check type="checkbox" label="Myalgia/Asthenia" />
              <Form.Check type="checkbox" label="Anosmia/Loss of smell" />
              <Form.Check type="checkbox" label="Fever" />
              <Form.Check type="checkbox" label="Sore-Throat" />
              <Form.Check type="checkbox" label="Persistent Cough" />
              <Form.Check type="checkbox" label="Chest Pain" />
              <Form.Check type="checkbox" label="Diarrhoea" />
              <Form.Check type="checkbox" label="Abdominal Pain" />
              <Form.Check
                type="checkbox"
                label="Delirium/Alteration of Consciousness"
              />
              <Form.Check type="checkbox" label="Fatigue" />

              <div className="mt-5">
                <h1>Number of above symptoms experienced</h1>
                <p>From the above range of symptoms</p>

                <Form.Select
                  aria-label="Default select example"
                  className="p-3"
                  onChange={handleChange('symptoms_No')}
                  defaultValue={values.symptoms_No}
                >
                  <option>Select</option>
                  <option value="less than 5">less than 5</option>
                  <option value="5 or more">5 or more</option>
                </Form.Select>
              </div>
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

export default Symptoms