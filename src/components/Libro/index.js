import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addLibro, updateLibro, fetchLibro} from '../../actions/libroActions';
import Libro from './Libro';

const mapStateToProps = ({ libro }) => ({ libro:libro.selectedLibro});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        fetchLibro,
        addLibro,
        updateLibro,

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Libro);