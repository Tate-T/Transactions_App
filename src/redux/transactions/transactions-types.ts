import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTransactionApi, getTransactionApi, deleteTransactionApi } from "../../services/mockapi";
import { addTransactionApiRequest, addTransactionSuccess, addTransactionError } from './transactions-actions';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export const sendFilteredTransactions = createAsyncThunk('transactions/add', async (filteredTransactions, thunkApi) => {
    try {
        const addedFilteredTransactions = await addTransactionApi(filteredTransactions);
        toast.success("Список транзакцій оновлено", {
            theme: 'colored',
            closeOnClick: true,
            pauseOnHover: true,
            autoClose: 2000,
        });
        return addedFilteredTransactions;
    } catch (error) {
        return thunkApi.rejectWithValue(toast.error("Список транзакцій НЕ оновлено"));
    }
});