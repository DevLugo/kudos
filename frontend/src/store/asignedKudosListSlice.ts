import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { RootState } from ".";
import client from '../clients/apolloClient';
import { SEND_KUDO } from "../graphql/mutations";
import { ASIGNED_KUDOS, RECEIVED_KUDOS } from "../graphql/queries/kudo";
import { createKudo, createKudoVariables, createKudo_createKudo } from "../__generated__/createKudo";
import { getAsignedKudos, getAsignedKudos_getAsignedKudos } from "../__generated__/getAsignedKudos";
import { getReceivedKudos, getReceivedKudos_getReceivedKudos } from "../__generated__/getReceivedKudos";
import { AsignedKudosStatus } from "../__generated__/globalTypes";

export interface IAsignedKudosState {
    loadingItems: Boolean;
    sendingKudo: Boolean
    items: getAsignedKudos_getAsignedKudos[];
    receivedKudos: getReceivedKudos_getReceivedKudos[];

}

const initialState: IAsignedKudosState = {
    loadingItems: false,
    sendingKudo: false,
    items: [],
    receivedKudos: []
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

export const fetchReceivedKudos = createAsyncThunk(
    "fetch/fetchReceivedKudos/list",
    async (): Promise<getReceivedKudos_getReceivedKudos[]> =>  {
        const { data } = await client.query<getReceivedKudos>({
            query: RECEIVED_KUDOS,
        });
        return data?.getReceivedKudos;
    }
);

export const requestSendKudo = createAsyncThunk(
    "request/requestSendKudo",
    async (variables: {variables: createKudoVariables, asignedKudoId:string}): Promise<createKudo_createKudo> =>  {
        const { data } = await client.mutate<createKudo, createKudoVariables>({
            mutation: SEND_KUDO,
            variables: variables.variables
        });
        return data?.createKudo!;
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
            state.loadingItems = true;
        });
        builder.addCase(fetchAsignedKudos.fulfilled, (state, action) => {
            state.loadingItems = false;
            state.items = action.payload;
        });
        builder.addCase(fetchAsignedKudos.rejected, (state, action) => {
            state.items = [];
            state.loadingItems = false;
            notification.error({message: action.error.message});
        });

        builder.addCase(fetchReceivedKudos.pending, (state, action) => {
            state.loadingItems = true;
        });
        builder.addCase(fetchReceivedKudos.fulfilled, (state, action) => {
            state.loadingItems = false;
            state.receivedKudos = action.payload;
        });
        builder.addCase(fetchReceivedKudos.rejected, (state, action) => {
            state.receivedKudos = [];
            state.loadingItems = false;
            notification.error({message: action.error.message});
        });

        builder.addCase(requestSendKudo.pending, (state, action) => {
            state.sendingKudo = true;
        });
        builder.addCase(requestSendKudo.fulfilled, (state, action) => {
            state.sendingKudo = false;
            const asignedKudoId = action.meta.arg.asignedKudoId; 
            const newItems = state.items.map(i => {
                if (i.id === asignedKudoId){
                    i.status = AsignedKudosStatus.SENT;
                }
                return i;
            })
            state.items = [...newItems];
            notification.success({message: "Kudo sent successfully"});

        });
        builder.addCase(requestSendKudo.rejected, (state, action) => {
            state.items = [];
            state.sendingKudo = false;
            notification.error({message: action.error.message});
        });
    },
});

export const { reset } = asignedKudosListSlice.actions;


export const selectAsignedKudosList = (state: RootState) => state.asignedKudosListSlice;

export default asignedKudosListSlice.reducer;