import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { RootState } from ".";
import client from '../clients/apolloClient';
import { ASIGNED_KUDOS } from "../graphql/queries/kudo";
import { getAsignedKudos, getAsignedKudos_getAsignedKudos } from "../graphql/queries/__generated__/getAsignedKudos";

export interface IAsignedKudosState {
    loading: Boolean;
    items: getAsignedKudos_getAsignedKudos[];
}

const initialState: IAsignedKudosState = {
    loading: false,
    items: []
};

export const fetchAsignedKudos = createAsyncThunk(
    "fetch/fetchAsignedKudos/list",
    async (): Promise<getAsignedKudos_getAsignedKudos[]> =>  {
        const { data } = await client.query<getAsignedKudos>({
            query: ASIGNED_KUDOS,
        });
        return data?.getAsignedKudos;
    }
);

export const asignedKudosListSlice = createSlice({
    name: "asignedKudosList",
    initialState,
    reducers: {
        reset: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsignedKudos.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchAsignedKudos.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        });
        builder.addCase(fetchAsignedKudos.rejected, (state, action) => {
            state.items = [];
            state.loading = false;
            notification.error({message: action.error.message});
        });
    },
});

export const { reset } = asignedKudosListSlice.actions;


export const selecAsignedKudosList = (state: RootState) => state.asignedKudosListSlice;

export default asignedKudosListSlice.reducer;