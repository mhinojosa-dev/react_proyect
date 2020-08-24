import React from 'react';
import { func, array } from 'prop-types';

import HomeList from './HomeList';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    const { fetchLibros } = this.props;
    fetchLibros();
  }

  render() {
    const { libros } = this.props;

    return (
      <div className="home">
        {' '}
        <center>
          <Link className="btn btn-primary" to={`/libros`}>
            NUEVO LIBRO
          </Link>
        </center>
        <h1>Lista libros</h1>
        <HomeList libros={libros} />
      </div>
    );
  }
}
Home.propTypes = {
  libros: array,
  fetchPosts: func,
};

export default Home;
