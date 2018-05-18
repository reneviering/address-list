import React, { Component } from 'react';

class CreateNewAddressContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  render() {
    return (
      <div>
        <label>
          <input type="text" value={ this.state.firstName } />
        </label>
      </div>
    );
  }

}

export default CreateNewAddressContainer;
