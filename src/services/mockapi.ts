import axios from 'axios';
import {ITransaction} from '../types/data';

axios.defaults.baseURL = 'https://6216b55b71e7672e53694d33.mockapi.io/';

export const addTransactionApi = (newTransaction: ITransaction) => {
    return axios.post('/transactions', newTransaction)
        .then(({ data }) => ({ ...newTransaction, id: data.id }))
        .catch((err) => err)
};

export const getTransactionApi = () => {
    return axios.get('/transactions')
        .then(({ data }) => data)
        .catch((err) => err);
};

export const deleteTransactionApi = (id: number) => {
    return axios.delete(`/transactions/${id}`)
        .then(({ data }) => data.id)
        .catch((err) => err);
};