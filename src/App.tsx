import React from 'react';
// import {ISelect} from './types/data';
import {Header} from './components/Header/Header';
import {TransactionsList} from './components/TransactionsList/TransactionsList';
import {TransactionsStatusList} from './components/TransactionsStatusList/TransactionsStatusList';
import {TransactionsTypeList} from './components/TransactionsTypeList/TransactionsTypeList';
import {ImportExportBtns} from './components/ImportExportBtns/ImportExportBtns';
import {TransactionsTable} from './components/TransactionsTable/TransactionsTable';
let props: {
  id: number;
  title: string;
  isSelect: boolean
}
const App: React.FC = ()=> {
 
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <TransactionsList />
        <div style={{ marginLeft: '10px' }}>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div style={{ margin: '0px 450px 10px 0px', display: 'flex' }}>
              <TransactionsStatusList />
              <TransactionsTypeList />
            </div>
            <ImportExportBtns />
          </div>
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
}

export  {App};
