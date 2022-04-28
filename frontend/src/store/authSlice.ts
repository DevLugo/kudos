import { createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit";
import { message } from "antd";
import { RootState } from ".";
import { SIGN_IN } from "../graphql/mutations"
import client from '../clients/apolloClient';
import { resetToken, setToken } from "../utils";
import { signIn, signInVariables, signIn_signIn, signIn_signIn_user } from "../__generated__/signIn";

export interface IAuthState {
    token?: string;
    user: signIn_signIn_user | null;
    error: string;
    loading: boolean;
}

const initialState: IAuthState = {
    user: null,
    error: "",
    loading: false,
};

interface Credentials {
    username: string;
    password: string;
}

export const signInWithCredentials = createAsyncThunk(
    "auth/signIn",
    async (variables: signInVariables): Promise<signIn_signIn> => {
        const { data } = await client.mutate<signIn, signInVariables>({
            mutation: SIGN_IN,
            variables,
        });
        return data?.signIn!;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(signInWithCredentials.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(signInWithCredentials.fulfilled, (state, action) => {
            const { token, user } = action.payload;
            state.user = user;
            state.token = token;
            state.loading = false;
            setToken(state.token);
        });
        builder.addCase(signInWithCredentials.rejected, (state, action) => {
            state.loading = false;
            message.error(action.error.message);
        });
    },
});

export const { reset } = authSlice.actions;

export const logoutUser = () => async (dispatch: Dispatch) => {
    /* try {
        await client.mutate({
            mutation: LOGOUT,
        });
    } catch (error) {
        console.log("Unable to request logout", error);
    } */
    resetToken();
    dispatch({ type: "RESET_ALL" });
};

export const selectMe = (state: RootState) => state.authSlice;

export default authSlice.reducer;