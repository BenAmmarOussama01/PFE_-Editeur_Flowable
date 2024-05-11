import { combineReducers } from '@reduxjs/toolkit';
import ProcessReducer from './processes/processSlice';
import DecisionReducer from './decisions/decisionTableSlice';
import DecisionServiceReducer from './decisions/decisionServiceSlice';
import FormReducer from './form/formSlice';


// Combine all reducers into one root reducer
const rootReducer = combineReducers({
  form: FormReducer,
  process: ProcessReducer,
  decision: DecisionReducer,
  decisionService: DecisionServiceReducer,
});

export default rootReducer;
