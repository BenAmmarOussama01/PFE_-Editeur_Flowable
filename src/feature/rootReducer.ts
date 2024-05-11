import { combineReducers } from '@reduxjs/toolkit'
import ProcessReducer from './slices/processes/processSlice'
import DecisionReducer from './slices/decisions/decisionTableSlice'
import DecisionServiceReducer from './slices/decisions/decisionServiceSlice'
import FormReducer from './slices/form/formSlice'
import CaseReducer from './slices/cases/caseSlice'

// Combine all reducers into one root reducer
const rootReducer = combineReducers({
  form: FormReducer,
  process: ProcessReducer,
  decision: DecisionReducer,
  decisionService: DecisionServiceReducer,
  case: CaseReducer,
})

export default rootReducer
