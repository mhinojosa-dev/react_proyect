import API from '../api/api';

const URL_LIBROS = '/libros';

const getLibros = async (limit = 10, page = 0) => {
  const response = await API.get(`${URL_LIBROS}?_limit=${limit}&_page=${page}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const getLibro = async (id) => {
  const response = await API.get(`${URL_LIBROS}/${id}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const addLibro = async (libro) => {
  const response = await API.post(`${URL_LIBROS}`, libro);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const updateLibro = async (libro) => {
  const response = await API.put(`${URL_LIBROS}/${libro.id}`, libro);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const deleteLibro = async (id) => {
  const response = await API.delete(`${URL_LIBROS}/${id}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

export default {
    getLibros,
  getLibro,
  addLibro,
  updateLibro,
  deleteLibro,
};
