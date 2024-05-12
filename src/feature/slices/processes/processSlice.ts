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
  processes: Process[]
  isLoading: boolean
}

const initialState: ProcessState = {
  processes: [],
  isLoading: false,
}

const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    /* fetch processes reducers */

    getProcess: (state) => {
      state.isLoading = true
    },

    getProcessSuccess: (state, action: PayloadAction<Returned>) => {
      state.isLoading = false
      state.processes = action.payload.data
    },
    getProcessFailure: (state) => {
      state.isLoading = false
    },

    /* create new process reducers */

    createProcess: (state, action) => {
      state.isLoading = true
    },

    createProcessSuccess: (state, action) => {
      console.log('slice: ', action)
      state.isLoading = false
      //state.processes = action.payload.data
    },
    createProcessFailure: (state, action) => {
      state.isLoading = false
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
