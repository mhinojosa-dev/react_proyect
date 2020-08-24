import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchLibros } from '../../actions/libroActions';
import Home from './Home';

const mapStateToProps = ({ libro }) => ({ libros: libro.libros });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        fetchLibros,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);