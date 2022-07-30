import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid;
    margin-top: 120px;
    width: 100%;
`

const TableRow = styled.h1`
    text-align: center;
`



const TransactionsTable: React.FC  = () => {

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                        >
                            Id
                        </th>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                        >
                            Status
                        </th>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                        >
                            Type
                        </th>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                        >
                            Client name
                        </th>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                        >
                            Amount
                        </th>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                        >
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <TableRow>
                    <tr>
                        {/* <td className={`${s.flexCenter} ${s.tableBorder}`}>
                            <Training className={s.marginBook} />
                            {title}
                        </td> */}
                        <td>1</td>
                        <td>pending</td>
                        <td>refill</td>
                        <td>name</td>
                        <td>100.00</td>
                        {/* {!isTraining && ( */}
                        <td>
                            <button
                                type="button"
                                // onClick={() => editTransactio(_id)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                // onClick={() => deleteTransactio(_id)}
                            >
                                Delete
                            </button>
                        </td>
                        {/* )} */}
                    </tr>
                    </TableRow>
                    <TableRow>
                    <tr>
                        {/* <td className={`${s.flexCenter} ${s.tableBorder}`}>
                            <Training className={s.marginBook} />
                            {title}
                        </td> */}
                        <td>1</td>
                        <td>pending</td>
                        <td>refill</td>
                        <td>name</td>
                        <td>100.00</td>
                        {/* {!isTraining && ( */}
                        <td>
                            <button
                                type="button"
                                // onClick={() => editTransactio(_id)}
                            >
                                Edit
                            </button><button
                                type="button"
                                // onClick={() => deleteTransactio(_id)}
                            >
                                Delete
                            </button>
                        </td>
                        {/* )} */}
                    </tr>
                    </TableRow>
                    <TableRow>
                    <tr>
                        {/* <td className={`${s.flexCenter} ${s.tableBorder}`}>
                            <Training className={s.marginBook} />
                            {title}
                        </td> */}
                        <td>1</td>
                        <td>pending</td>
                        <td>refill</td>
                        <td>name</td>
                        <td>100.00</td>
                        {/* {!isTraining && ( */}
                        <td>
                            <button
                                type="button"
                                // onClick={() => editTransactio(_id)}
                            >
                                Edit
                            </button><button
                                type="button"
                                // onClick={() => deleteTransactio(_id)}
                            >
                                Delete
                            </button>
                        </td>
                        {/* )} */}
                    </tr>
                    </TableRow>
                </tbody>

                {/* <tbody className={s.tableText}>
                    {newTransactions.map(
                        ({ }, index) => (
                            <tr key={_id + index} className={s.fontSize}>
                                <td className={`${s.flexCenter} ${s.tableBorder}`}>
                                    <Training className={s.marginBook} />
                                    {title}
                                </td>
                                <td className={s.tableBorder}>1</td>
                                <td className={s.tableBorder}>2</td>
                                <td className={s.tableBorder}>3</td>
                                {!isTraining && (
                                    <td className={`${s.iconDelete} ${s.book} ${s.tableBorder}`}>
                                        <button
                                            type="button"
                                            onClick={() => deleteTransactio(_id)}
                                            className={`${s.deleteBtn} ${s.tableBorder}`}
                                        >
                                            <Delete width="14" height="18" />
                                        </button>
                                    </td>
                                )}
                            </tr>
                        )
                    )}
                </tbody> */}
            </table>
        </Container >
    )
}

export  {TransactionsTable};