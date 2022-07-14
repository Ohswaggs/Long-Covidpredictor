import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

export class UserForm extends Component {
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
              <h1>Fill in your details to get your assessment</h1>
              <p>Bio</p>
              <Form.Group className="mb-3">
                {/* <Form.Label>First Name</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  onChange={handleChange('firstname')}
                  defaultValue={values.firstname}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                {/* <Form.Label>Last Name</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={handleChange('lastname')}
                  defaultValue={values.lastname}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="I agree to the processing of personal data*"
                  onChange={handleChange('checked')}
                  defaultValue={values.checked}
                />
              </Form.Group>
            </Form>
            <Button
              variant="outline-primary"
              size="lg"
              className="px-5"
              style={styles.button}
              onClick={this.continue}
            >
              See Long-covid score
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

export default UserForm