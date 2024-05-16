import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface Returned {
  data: Form[]
  size: number
  start: number
  total: number
}
//Form typ
interface Form {
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
export interface FormState {
  forms: Form[]
  isLoading: boolean
}
const initialState: FormState = {
  forms: [],
  isLoading: false,
}
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    getFormFetch: (state, action) => {
      state.isLoading = true
    },
    getFormSuccess: (state, action: PayloadAction<Returned>) => {
      state.isLoading = false
      state.forms = action.payload.data
    },
    getFormFailure: (state) => {
      state.isLoading = false
    },
  },
})
export const { getFormFetch, getFormFailure, getFormSuccess } =
  formSlice.actions
export default formSlice.reducer
