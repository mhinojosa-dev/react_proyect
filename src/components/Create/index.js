import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addLibro,
  resetLibroForm
} from '../../actions/libroActions';

import Create from './Create';

const mapStateToProps = ({ libro }) => ({ libro: libro.selectedLibro });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addLibro,
      resetLibroForm
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Create);