import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

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

export const getProcesses = createAsyncThunk('process/get', async () => {
  const response = await fetch(
    //'http://localhost:8070/configuration/modeler/rest/models?sort=modifiedDesc',
    'http://localhost:8070/configuration/modeler/rest/models?filter=processes&modelType=0&sort=modifiedDesc',
  )
  return (await response.json()) as Returned

  /*const response = await invokeWS({
    //url: `http://localhost:8070/configuration/users/me`,
    url: `http://localhost:8070/configuration/modeler/rest/models?sort=modifiedDesc`,
    method: MethodHttp.get,
  })*/
})

const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
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
  },
  extraReducers: (builder) => {
    builder.addCase(
      getProcesses.fulfilled,
      (state, action: PayloadAction<Returned>) => {
        console.log(action.payload.data)
        state.items = action.payload.data
      },
    )
    builder.addCase(getProcesses.pending, (state, action) => {
      console.log('pending')
    })
    builder.addCase(getProcesses.rejected, (state, action) => {
      console.log('rejected')
    })
  },
})

export const { getProcess, getProcessFailure, getProcessSuccess } =
  processSlice.actions
export default processSlice.reducer
