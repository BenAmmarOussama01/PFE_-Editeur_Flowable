import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Process type
interface Process {
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
}

export interface ProcessState {
    items: { [id: string]: Process };
}

const initialState: ProcessState = {
    items: {}
}

const processSlice = createSlice({
    name: "process",
    initialState,
    reducers: {
        receivedProducts(state, action: PayloadAction<Process[]>) {
            action.payload.forEach(process => {
                state.items[process.id] = process;
            });
        }
    }
});

export const { receivedProducts } = processSlice.actions;
export default processSlice.reducer;
