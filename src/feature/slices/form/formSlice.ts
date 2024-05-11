import { createSlice, PayloadAction} from '@reduxjs/toolkit'
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
  items: Form[]
  loading: boolean
}
const initialState: FormState = {
  items: [],
  loading: false,
}
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    getFormFetch: (state) => {
      state.loading = true
    },
    getFormSuccess: (state, action: PayloadAction<Returned>) => {
      state.loading = false
      state.items = action.payload.data
    },
    getFormFailure: (state) => {
      state.loading = false
    },
  },
})
export const { getFormFetch, getFormFailure, getFormSuccess } =
  formSlice.actions
export default formSlice.reducer
