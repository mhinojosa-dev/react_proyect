import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Libro.css';

class Libro extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      fetchLibro,
    } = this.props;  
    if (id) {
        fetchLibro(id);
    }
  }

  render() {
    const { libro } = this.props;

    return libro ? (
      <div className="Libro">
        <h1>Titulo {libro.titulo}</h1>
        <img src="http://covers.openlibrary.org/b/isbn/9780385533225-L.jpg" alt="banner" />
        <p>DESCRIPCION: {libro.descripcion}</p>
        <p>PRECIO: {libro.precio}</p>
      </div>
    ) : (
      <div><h1>There is no libro for this id.</h1></div>
    );
  }
}

Libro.propTypes = {
  match: PropTypes.object,
  fetchPost: PropTypes.func,
  libro: PropTypes.object,
};

export default Libro;
