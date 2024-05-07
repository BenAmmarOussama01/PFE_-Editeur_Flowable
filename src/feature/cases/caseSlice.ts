import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Case {
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

interface Returned {
  data: Case[]
  size: number
  start: number
  total: number
}

export interface ProcessState {
  items: Case[]
  loading: boolean
}

const initialState: ProcessState = {
  items: [],
  loading: false,
}

const CaseSlice = createSlice({
  name: 'case',
  initialState,
  reducers: {
    getCase: (state) => {
      state.loading = true
    },

    getCaseSuccess: (state, action: PayloadAction<Returned>) => {
      state.loading = false
      state.items = action.payload.data
    },
    getCaseFailure: (state) => {
      state.loading = false
    },
  },
})

export const { getCase, getCaseSuccess, getCaseFailure } = CaseSlice.actions

export default CaseSlice.reducer
