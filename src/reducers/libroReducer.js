import { FETCH_LIBROS_SUCCESS, FETCH_LIBRO_SUCCESS, ADD_LIBRO_SUCCESS, UPDATE_LIBRO_SUCCESS, DELETE_LIBRO_SUCCESS } from '../actions/actionTypes';
  import { getNewState } from '../shared/utils/frontend';
  
  const initialState = {
    libros: [],
    seletedLibro: null,
  };
  
  export default function libroReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_LIBROS_SUCCESS: {
        const { payload: libros } = action;
        return getNewState(state, {
            libros,
        });
      }
      case FETCH_LIBRO_SUCCESS: {
        const { payload: selectedLibro } = action;
        return getNewState(state, {
            selectedLibro,
        });
      }
      case ADD_LIBRO_SUCCESS: {
        const { payload: libro } = action;
        const newLibros = [...state.libros, libro];
        return getNewState(state, {
          libros: newLibros,
          selectedLibro: libro,
        });
      }
      case DELETE_LIBRO_SUCCESS: {
        const { payload: id } = action;
        const filteredLibros = state.libros.filter((libro) => libro.id !== id);
        return getNewState(state, {
          libros: filteredLibros,
        });
      }
      case UPDATE_LIBRO_SUCCESS: {
        const { payload: updatedLibro } = action;
        const index = state.libros.findIndex((libro) => libro.id === updatedLibro.id);
        const filteredLibros = state.libros.filter((libro) => libro.id !== updatedLibro.id);
        filteredLibros.splice(index, 0, updatedLibro);
        return getNewState(state, {
          libros: filteredLibros,
        });
      }
      default: {
        return state;
      }
    }
  }