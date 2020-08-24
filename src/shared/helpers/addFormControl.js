import React, { Component } from 'react';
import { FormGroup, Label } from 'reactstrap';

const addFormControl = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <FormGroup>
          <Label for={this.props.id}>{this.props.label}</Label>
          <WrappedComponent {...this.props} />
        </FormGroup>
      );
    }
  };
};

export default addFormControl;
