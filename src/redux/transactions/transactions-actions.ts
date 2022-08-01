import { createAction } from "@reduxjs/toolkit";

export const addToFilterState = createAction('transactions/addToFilterState');

export const addTransactionApiRequest = createAction('addTransactionApiRequest');

export const addTransactionSuccess = createAction('addTransactionSuccess');

export const addTransactionError = createAction('addTransactionError');