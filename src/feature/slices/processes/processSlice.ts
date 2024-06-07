import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Returned {
  data: IProcess[];
  size: number;
  start: number;
  total: number;
}

export interface IProcess {
  id: string;
  name: string;
  key: string;
  description: string;
  createdBy: string;
  lastUpdatedBy: string;
  lastUpdated: number;
  latestVersion: boolean;
  version: number;
  comment: string;
  modelType: number;
  tenantId: string;
  appDefinition?: any;
}

export interface ProcessState {
  processes: IProcess[];
  isLoading: boolean;
}
const initialState: ProcessState = {
  processes: [],
  isLoading: false,
};

const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    //get process reducer
    getProcess: (state,_action) => {
      state.isLoading = true;
    },
    getProcessSuccess: (state, action: PayloadAction<Returned>) => {
      state.isLoading = false;
      state.processes = action.payload.data;
    },
    getProcessFailure: (state) => {
      state.isLoading = false;
    },
    //create new process reducer 
    createProcess: (state) => {
      state.isLoading = true;
    },
    createProcessSuccess: (state, action: PayloadAction<Returned>) => {
      state.isLoading = false;
      state.processes = action.payload.data;
    },
    createProcessFailure: (state) => {
      state.isLoading = false;
    },
   
  },
});

export const {
  getProcess,
  getProcessFailure,
  getProcessSuccess,
  createProcess,
  createProcessSuccess,
  createProcessFailure,
 
} = processSlice.actions;

export default processSlice.reducer;
