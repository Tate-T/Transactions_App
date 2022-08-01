import { createReducer } from "@reduxjs/toolkit";
import shortid from 'shortid';
import { addTransactionApiRequest, addTransactionSuccess, addTransactionError, addToFilterState } from "./transactions-actions";
import { getTransactions, deleteTransaction } from './transactions-types';

const initialState = [
    { id: shortid.generate(), name: 'Products', status: 'pending', type: 'refill', amount: 100, action: false },
    { id: shortid.generate(), name: 'Goods', status: 'completed', type: 'withdrawal', amount: 100, action: false },
    { id: shortid.generate(), name: 'Services', status: 'chanceled', type: 'refill', amount: 100, action: false },
    { id: shortid.generate(), name: 'Things', status: 'completed', type: 'withdrawal', amount: 100, action: false },
];

export const transactionsReducer = createReducer(initialState, {
    [addTransactionSuccess]: (state, { payload }) => [...state, payload],
    [getTransactions.fulfilled]: (_, { payload }) => payload,
    [deleteTransaction.fulfilled]: (state, { payload }) =>
        state.filter(transaction => transaction.id !== payload)
});

export const isLoadingReducer = createReducer(false, {
    [addTransactionApiRequest]: () => true,
    [addTransactionSuccess]: () => false,
    [addTransactionError]: () => false,

    // за 2-м варіантом через async thunk:

    [getTransactions.pending]: () => true,
    [getTransactions.fulfilled]: () => false,
    [getTransactions.rejected]: () => false,
    [deleteTransaction.pending]: () => true,
    [deleteTransaction.fulfilled]: () => false,
    [deleteTransaction.rejected]: () => false,
})

export const filterReducer = createReducer('', {
    [addToFilterState]: (_, { payload }) => payload,

});

const setError = (_, { payload }) => payload;
const resetError = () => null;

export const errorReducer = createReducer(null, {
    [addTransactionError]: setError,
    [addTransactionApiRequest]: resetError,
    [getTransactions.rejected]: setError,
    [getTransactions.pending]: resetError,
    [deleteTransaction.rejected]: setError,
    [deleteTransaction.pending]: resetError,
});