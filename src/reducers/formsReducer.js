import { createForms } from 'react-redux-form';

const initialForm = {
  titulo: '',
  descripcion: '',
  precio: '',
  autorId: '',
};

export default function formsReducer() {
  return createForms({
    libroForm: initialForm,
  });
}
