import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { invokeWS, MethodHttp } from '../../setup/api-service'

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
  isLoading: boolean;
}

const initialState: ProcessState = {
  items: [],
  isLoading: false,
}



const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    getProcessFetch: (state) => {
      state.isLoading = true
    },

    getProcessSuccess: (state, action: PayloadAction<Returned>) => {
      state.isLoading = false
      state.items = action.payload.data
    },
    getProcessFailure: (state) => {
      state.isLoading = false
    },
  }
})

export const { getProcessFetch, getProcessFailure, getProcessSuccess } =
  processSlice.actions
export default processSlice.reducer
