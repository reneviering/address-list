import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const validations = {
  firstName: item => item !== '',
  lastName: item => item !== '',
  email: item => item !== ''
};

class AddressForm extends React.Component {
  constructor (props) {
    super();

    this.state = {
      address: {
        firstName: '',
        lastName: '',
        email: ''
      },
      formTouched: false
    };
  }

  static getDerivedStateFromProps (nextProps, nextState) {
    if (!nextProps.address) return null;

    return {
      address: nextProps.address
    };
  }

  handleInputChange = event => {
    this.setState({
      address: {
        ...this.state.address,
        [event.target.name]: event.target.value
      },
      formTouched: true
    });
  }

  // componentWillReceiveProps (nextProps, nextState) {
  //   this.setState({
  //     address: nextProps.address
  //   });
  // }

  getValidationStateFor = inputName => {
    if (!validations[inputName]) {
      throw new Error(`No validation rule for ${inputName} defined`);
    };

    return validations.firstName(this.state.address[inputName]);
  }

  areAllInputsValid = () => {
    return (
      this.getValidationStateFor('firstName') &&
      this.getValidationStateFor('lastName') &&
      this.getValidationStateFor('email')
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSaveAddress(this.state.address);
  }

  render () {
    return (
      <div>
        <Form onSubmit={ this.handleSubmit }>

          <FormGroup>
            <Label for="firstName">Vorname:</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              value={ this.state.address.firstName }
              onChange={ this.handleInputChange }
              invalid={ this.state.formTouched && !this.getValidationStateFor('firstName') }
            />
            <FormFeedback>Vorname ist erforderlich</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="lastName">Nachname:</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              value={ this.state.address.lastName }
              onChange={ this.handleInputChange }
              invalid={ this.state.formTouched && !this.getValidationStateFor('lastName') }
            />
            <FormFeedback>Nachname ist erforderlich</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="email">E-Mail:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={ this.state.address.email }
              onChange={ this.handleInputChange }
              invalid={ this.state.formTouched && !this.getValidationStateFor('email') }
            />
            <FormFeedback>E-Mail ist erforderlich</FormFeedback>
          </FormGroup>

          <FormGroup className="text-right">
            <Button type="submit" color="primary" disabled={ !this.areAllInputsValid() }>Speichern</Button>
          </FormGroup>

        </Form>
      </div>
    );
  }
}

export default AddressForm;
