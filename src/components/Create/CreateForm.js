import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { Form, Control, Errors } from 'react-redux-form';
import { FormGroup, Label, Button } from 'reactstrap';

const required = (val) => val && val.length;

class CreateForm extends Component {
  handleOnSubmit = (values) => {
    this.handleAddNewLibro(values);
  };

  handleAddNewLibro = (values) => {
    const { addLibro, resetLibroForm } = this.props;
    if (values.titulo) {
        addLibro({
            titulo: values.titulo,
            descripcion: values.descripcion,
            precio: values.precio,
            autorId: values.autorId,
      });
    }
    resetLibroForm();
  };

  attachDispatch(dispatch) {
    this.formDispatch = dispatch;
  }

  render() {
    return (
      <div>
        <Form
          className="CreateForm"
          model="libroForm"
          onSubmit={(values) => this.handleOnSubmit(values)}
          getDispatch={(dispatch) => this.attachDispatch(dispatch)}
        >
          <FormGroup>
            <Label for="titulo">Titulo</Label>
            <Control.text
              model=".titulo"
              name="titulo"
              id="titul"
              placeholder="Libro Title"
              className="form-control"
              validators={{ required }}
            />
            <Errors className="error" model=".titulo" show="touched" messages={{ required: 'Required' }} />
          </FormGroup>
          <FormGroup>
            <Label for="descripcion">Descripcion</Label>
            <Control.textarea
              id="descripcion"
              name="descripcion"
              className="form-control"
              placeholder="Descripcion Content"
              model=".descripcion"
              validators={{ required }}
            />
            <Errors
              className="error"
              model=".descripcion"
              show="touched"
              messages={{ required: 'Este elemento es requerido*' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="precio">Precio</Label>
            <Control
              id="precio"
              name="descprecioripcion"
              type="number"
              className="form-control"
              placeholder="Precio Libro"
              model=".precio"
              validators={{ required }}
            />
            <Errors
              className="error"
              model=".precio"
              show="touched"
              messages={{ required: 'Este elemento es requerido*' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="autorId">Autor</Label>
            <Control.text
              model=".autorId"
              id="autorId"
              name="autorId"
              className="form-control"
              placeholder="Autor Libro"
              validators={{ required }}
            />
            <Errors
              className="error"
              model=".autorId"
              show="touched"
              messages={{ required: 'Este elemento es requerido*' }}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

CreateForm.propTypes = {
  addPost: func,
  resetPostForm: func,
  history: object
};

export default CreateForm;
