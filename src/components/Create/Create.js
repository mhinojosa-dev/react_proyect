import React from 'react';
import { func } from 'prop-types';

import CreateForm from './CreateForm';

const Create = (props) => {
  const { addLibro, resetLibroForm } = props;
  return (
    <div className="Create">
      <h1>Create New Libro</h1>
      <CreateForm addLibro={addLibro} resetLibroForm={resetLibroForm} />
    </div>
  );
};

Create.propTypes = {
    addLibro: func,
  resetLibroForm: func,
};

export default Create;
