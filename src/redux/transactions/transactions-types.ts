import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useDispatch } from 'react-redux';
import { addTransactionApi, getTransactionApi, deleteTransactionApi } from "../../services/mockapi";
import { addTransactionApiRequest, addTransactionSuccess, addTransactionError } from './transactions-actions';
import {ITransaction}  from '../../types/data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// спосіб 1:

export const addTransaction = (transaction: ITransaction) => {
    
    // const dispatch = useDispatch();

    return (dispatch: void) => {
        dispatch(addTransactionApiRequest());

        addTransactionApi(transaction)
            .then((data) => dispatch(addTransactionSuccess(data)))
            .catch((err) => dispatch(addTransactionError(err.message)));
    }
}

// інший варіант через async thunk:

export const getTransactions = createAsyncThunk('transactions/get/:id', async (id: number, thunkApi) => {
    try {
        const transactions = await getTransactionApi(id);
        return transactions;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const deleteTransaction = createAsyncThunk('transactions/delete/:id', async (id: number, thunkApi) => {
    try {
        await deleteTransactionApi(id);
        return id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const sendFilteredTransactions = createAsyncThunk('transactions/add', async (filteredTransactions: ITransaction[], thunkApi) => {
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