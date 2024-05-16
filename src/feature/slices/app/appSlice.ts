import { createSlice, PayloadAction} from '@reduxjs/toolkit'
interface Returned {
  data: App[]
  size: number
  start: number
  total: number
}
//App typ
interface App {
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
export interface AppState {
  items: App[]
  loading: boolean
}
const initialState: AppState = {
  items: [],
  loading: false,
}
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getAppFetch: (state, action) => {
      state.loading = true
    },
    getAppSuccess: (state, action: PayloadAction<Returned>) => {
      state.loading = false
      state.items = action.payload.data
    },
    getAppFailure: (state) => {
      state.loading = false
    },
  },
})
export const { getAppFetch, getAppFailure, getAppSuccess } =
  appSlice.actions
export default appSlice.reducer
 