import { createSlice, PayloadAction} from '@reduxjs/toolkit'
interface Returned {
  data: Decision[]
  size: number
  start: number
  total: number
}
//Decision typ
interface Decision {
  id: string
  name: string
  key: string
  description: string
  createdBy: string
  lastUpdatedBy: string
  lastUpdated: number
  latestVersion: boolean
  version: number
  comment: string
  modelType: number
  tenantId: string
  appDefinition?: any
}
export interface DecisionState {
  items: Decision[]
  loading: boolean
}
const initialState: DecisionState = {
  items: [],
  loading: false,
}
const decisionSlice = createSlice({
  name: 'decision',
  initialState,
  reducers: {
    getDecisionFetch: (state) => {
      state.loading = true
    },
    getDecisionSuccess: (state, action: PayloadAction<Returned>) => {
      state.loading = false
      state.items = action.payload.data
    },
    getDecisionFailure: (state) => {
      state.loading = false
    },
  },
})
export const { getDecisionFetch, getDecisionFailure, getDecisionSuccess } =
  decisionSlice.actions
export default decisionSlice.reducer
