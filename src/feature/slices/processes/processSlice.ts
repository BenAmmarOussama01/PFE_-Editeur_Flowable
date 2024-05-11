import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Returned {
  data: Process[]
  size: number
  start: number
  total: number
}

//Process type

interface Process {
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
export interface ProcessState {
  items: Process[]
  loading: boolean
}

const initialState: ProcessState = {
  items: [],
  loading: false,
}

const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    /* fetch processes reducers */

    getProcess: (state) => {
      state.loading = true
    },

    getProcessSuccess: (state, action: PayloadAction<Returned>) => {
      state.loading = false
      state.items = action.payload.data
    },
    getProcessFailure: (state) => {
      state.loading = false
    },

    /* create new process reducers */

    createProcess: (state, action) => {
      state.loading = true
    },

    createProcessSuccess: (state, action) => {
      console.log('slice: ', action)
      state.loading = false
      //state.items = action.payload.data
    },
    createProcessFailure: (state, action) => {
      state.loading = false
      console.log('slice err : ', action)
    },
  },
})

export const {
  getProcess,
  getProcessFailure,
  getProcessSuccess,
  createProcess,
  createProcessSuccess,
  createProcessFailure,
} = processSlice.actions
export default processSlice.reducer
