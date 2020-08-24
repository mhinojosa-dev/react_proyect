import {combineReducers} from 'redux';
import libro from '../../reducers/libroReducer';
import formsReducers from '../../reducers/formsReducer'
const rootReducer = combineReducers({
    libro,
    ...formsReducers()
});

export default rootReducer;