import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { TransactionsForm } from '../TransactionsForm/TransactionsForm';
import { ITransaction } from '../../types/data';
import {getTransactions} from '../../redux/transactions/transactions-types';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 10px;
    border: 2px solid;
    width: 200px;
    min-height: 200px;
`
const Title = styled.h1`
    margin: 0;
    padding: 0;
    margin-left: 5px;
    font-size: 16px;
    background-color: cornflowerblue;
    text-align: center;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    border-top: 2px solid;
`

const TransactionsList: React.FC<{transactions: ITransaction[]}>  = (transactions): ITransaction[] => {
   
    const dispatch = useDispatch();
    const isLoading: boolean = useSelector((state: ITransaction[]) => state.transactions.isLoading);

    return (
        <Container>
            <Title>Transactions</Title>
            <List>
                {transactions.map(transaction => <TransactionsForm key={transaction.id} {...transaction}/>)}
            </List>
        </Container>
    )
}

const mapStateToProps = (state: ITransaction[]) => {
    return {
        transactions: state.transactions,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch: void) => {
    return {
        getTransactions: (id: number) => dispatch(getTransactions(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
// export  {TransactionsList};