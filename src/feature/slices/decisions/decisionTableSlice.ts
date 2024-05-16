import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
  isLoading: boolean
}
const initialState: DecisionState = {
  items: [],
  isLoading: false,
}
const decisionSlice = createSlice({
  name: 'decision',
  initialState,
  reducers: {
    getDecisionFetch: (state, action) => {
      state.isLoading = true
    },
    getDecisionSuccess: (state, action: PayloadAction<Returned>) => {
      state.isLoading = false
      state.items = action.payload.data
    },
    getDecisionFailure: (state) => {
      state.isLoading = false
    },
  },
})
export const { getDecisionFetch, getDecisionFailure, getDecisionSuccess } =
  decisionSlice.actions
export default decisionSlice.reducer
