import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTransactionApi, getTransactionApi, deleteTransactionApi } from "../../services/mockapi";
import { addTransactionApiRequest, addTransactionSuccess, addTransactionError } from './transactions-actions';

// спосіб 1:

export const addTransaction = (transaction) => {
    return (dispatch) => {
        dispatch(addTransactionApiRequest());

        addTransactionApi(transaction)
            .then((data) => dispatch(addTransactionSuccess(data)))
            .catch((err) => dispatch(addTransactionError(err.message)));
    }
}

// інший варіант через async thunk:

export const getTransactions = createAsyncThunk('transactions/get/:id', async (id, thunkApi) => {
    try {
        const transactions = await getTransactionApi(id);
        return transactions;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const deleteTransaction = createAsyncThunk('transactions/delete/:id', async (id, thunkApi) => {
    try {
        await deleteTransactionApi(id);
        return id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});