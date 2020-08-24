import { actions } from 'react-redux-form';
import { request, received, error } from '../shared/redux/baseActions';

import LibroService from '../services/LibrosService';
import {
  FETCH_LIBROS_REQUEST,
  FETCH_LIBROS_SUCCESS,
  FETCH_LIBROS_ERROR,
  FETCH_LIBRO_REQUEST,
  FETCH_LIBRO_SUCCESS,
  FETCH_LIBRO_ERROR,
  ADD_LIBRO_REQUEST,
  ADD_LIBRO_SUCCESS,
  ADD_LIBRO_ERROR,
  UPDATE_LIBRO_REQUEST,
  UPDATE_LIBRO_SUCCESS,
  UPDATE_LIBRO_ERROR,
  DELETE_LIBRO_REQUEST,
  DELETE_LIBRO_SUCCESS,
  DELETE_LIBRO_ERROR,
} from './actionTypes';

export const fetchLibros = (limit, page) => async (dispatch) => {
  dispatch(request(FETCH_LIBROS_REQUEST));
  try {
    const response = await LibroService.getLibros(limit, page);
    dispatch(received(FETCH_LIBROS_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_LIBROS_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err.response);
  }
};

export const fetchLibro = (id) => async (dispatch) => {
  dispatch(request(FETCH_LIBRO_REQUEST));
  try {
    const response = await LibroService.getLibro(id);
    dispatch(received(FETCH_LIBRO_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_LIBRO_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err.response);
  }
};

export const addLibro = (libro) => async (dispatch) => {
  dispatch(request(ADD_LIBRO_REQUEST));
  try {
    const response = await LibroService.addLibro(libro);
    dispatch(received(ADD_LIBRO_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(ADD_LIBRO_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err.response);
  }
};

export const updateLibro = (libro) => async (dispatch) => {
  dispatch(request(UPDATE_LIBRO_REQUEST));
  try {
    const response = await LibroService.updateLibro(libro);
    dispatch(received(UPDATE_LIBRO_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(UPDATE_LIBRO_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR:', err.response);
  }
};

export const deleteLibro = (id) => async (dispatch) => {
  dispatch(request(DELETE_LIBRO_REQUEST));
  try {
    const response = await LibroService.deleteLibro(id);
    dispatch(received(DELETE_LIBRO_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(DELETE_LIBRO_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR:', err.response);
  }
};
export const resetLibroForm = () => (dispatch) => {
  dispatch(actions.reset('libroForm'));
};
