import { combineReducers } from 'redux';
import uiReducer from './ui_reducer'
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  session: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;