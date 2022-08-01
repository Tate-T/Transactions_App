import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getTransactions } from './redux/transactions/transactions-types';
import {Header} from './components/Header/Header';
import {TransactionsList} from './components/TransactionsList/TransactionsList';
import {TransactionsForm} from './components/TransactionsForm/TransactionsForm';
import {ImportExportBtns} from './components/ImportExportBtns/ImportExportBtns';
import {TransactionsTable} from './components/TransactionsTable/TransactionsTable';

const App: React.FC = ()=> {

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTransactions());
    }, [dispatch]);
 
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <TransactionsList />
        <div style={{ marginLeft: '10px' }}>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <TransactionsForm />
            <ImportExportBtns />
          </div>
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
}

export  {App};
