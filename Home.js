import React, { Component } from 'react';
import Start from './Start';
import PatientPhysician from './Patient_Physician';
import Age from './Age'
import Sex from './Sex'
import Symptoms from './Symptoms'
import Symptoms2 from './Symptoms2';
import BMI from './BMI';
import Vaccine from './Vaccine';
import UserForm from './UserForm';
import Score from './Score';

export class Home extends Component {
  state = {
    step: 1,
    patient: '',
    gender: '',
    symptoms: [],
    symptoms_No: '',
    symptoms2: '',
    bmi: '',
    vaccine: '',
    firstname: '',
    lastname: '',
    email: '',
    age: '',
    checked: '',
  };

  // next step method

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // previous step method

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //   handle field change

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const {
      patient,
      gender,
      symptoms,
      symptoms_No,
      symptoms2,
      bmi,
      vaccine,
      firstname,
      lastname,
      email,
      age,
      checked,
    } = this.state;

    const values = {
      patient,
      gender,
      symptoms,
      symptoms_No,
      symptoms2,
      bmi,
      vaccine,
      firstname,
      lastname,
      email,
      age,
      checked,
    };

    switch (step) {
      case 1:
        return (
          <Start nextStep={this.nextStep} handleChange={this.handleChange} />
        );
      case 2:
        return (
          <PatientPhysician
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Age
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Sex
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Symptoms
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Symptoms2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <BMI
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <Vaccine
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 9:
        return (
          <UserForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 10:
        return (
        <Score 
        nextStep={this.nextStep}
        values={values}/>
        )
    default:
    return <Home/>
    }
  }
}

export default Home;
