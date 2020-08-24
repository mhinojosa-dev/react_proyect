import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import addFormControl from '../../shared/helpers/addFormControl';

const FirstNameInput = () => <Input placeholder="First Name" id="firstname" />;
const LastNameInput = () => <Input placeholder="Last Name" id="lastname" />;

const LabeledFirstName = addFormControl(FirstNameInput);
const LabeledLastName = addFormControl(LastNameInput);

const Contact = () => (
  <>
    <h1>Contact</h1>
    <Form>
      <LabeledFirstName label="First Name" id="firstname" />
      <LabeledLastName label="Last name" id="lastname" />
      <Button>Submit</Button>
    </Form>
  </>
);

export default Contact;
