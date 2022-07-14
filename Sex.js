import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

export class Sex extends Component {
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
              <h1>Gender</h1>
              <p>Please input your gender status</p>
              <Form.Select
                aria-label="Default select example"
                className="p-3"
                onChange={handleChange('gender')}
                defaultValue={values.gender}
              >
                <option>Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
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

export default Sex