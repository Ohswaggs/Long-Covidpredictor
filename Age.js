import React, { Component } from 'react'
import { Button, Container, Form} from 'react-bootstrap'

export class Age extends Component {
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
                <h1>How old were you at your last Birthday</h1>
                <p>Current Age</p>
                <Form.Select
                  aria-label="Default select example"
                  className="p-3"
                  onChange={handleChange('age')}
                  defaultValue={values.age}
                >
                  <option>Select</option>
                  <option value="18 to 49 years">18 to 49 years</option>
                  <option value="50 to 60 years">50 to 60 years</option>
                  <option value=">/= 70 years "> 70 years and above</option>
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

export default Age