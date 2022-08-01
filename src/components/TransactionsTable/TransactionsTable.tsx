import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { deleteTransaction } from '../../redux/transactions/transactions-types';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid;
    margin-top: 120px;
    width: 100%;
`

const TableRow = styled.div`
    /* text-align: center; */
    font-size: 14px;
    font-weight: 400;
`

const TransactionsTable: React.FC  = ({transactions, addTransaction, deleteTransaction }) => {

    const dispatch = useDispatch();

    const findTransaction = () => {
        return transactions.filter(transaction =>
            transaction.name.toLowerCase().includes(filter?.toLowerCase())
        );
    }

    const editTransaction = ({transaction}) => {
        return  [...transactions, transaction.id ];
    }

    return (
        <Container>
            <table>
                <thead >
                <TableRow>
                    <tr>
                        <th
                            style={{ borderBottom: '1px solid black', width: '100px' }}
                        >
                            Id
                        </th>
                        <th
                            style={{ borderBottom: '1px solid black', width: '200px' }}
                        >
                            Status
                        </th>
                        <th
                            style={{ borderBottom: '1px solid black', width: '300px' }}
                        >
                            Type
                        </th>
                        <th
                            style={{ borderBottom: '1px solid black', width: '300px' }}
                        >
                            Client name
                        </th>
                        <th
                            style={{ borderBottom: '1px solid black', width: '200px' }}
                        >
                            Amount
                        </th>
                        <th
                            style={{ borderBottom: '1px solid black', width: '300px' }}
                        >
                            Action
                        </th>
                    </tr>
                </TableRow>
                </thead>

                <tbody >
                {findTransaction().map(
                        ({ }, index) => (
                    <TableRow>
                    <tr >
                        <td style={{ width: '100px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>1</td>
                        <td style={{ width: '200px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>pending</td>
                        <td style={{ width: '300px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>refill</td>
                        <td style={{ width: '300px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>name</td>
                        <td style={{ width: '200px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>100.00</td>
                        <td style={{ width: '300px', textAlign: 'center', borderBottom: '1px solid #E0E5EB', paddingBottom: '5px' }}>
                            <button
                                type="button"
                                onClick={() => editTransaction(id)}
                                style={{ marginRight: '10px' }}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={() => deleteTransaction(id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    </TableRow>
                        )
                    )}
                </tbody>
            </table>
        </Container >
    )
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions,
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTransactions: (id) => dispatch(deleteTransaction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTable);

// export  {TransactionsTable};