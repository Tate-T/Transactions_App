import React from 'react';
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



const TransactionsTable: React.FC  = () => {

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
                    <TableRow>
                    <tr >
                        {/* <td className={`${s.flexCenter} ${s.tableBorder}`}>
                            <Training className={s.marginBook} />
                            {title}
                        </td> */}
                        <td style={{ width: '100px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>1</td>
                        <td style={{ width: '200px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>pending</td>
                        <td style={{ width: '300px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>refill</td>
                        <td style={{ width: '300px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>name</td>
                        <td style={{ width: '200px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>100.00</td>
                        {/* {!isTraining && ( */}
                        <td style={{ width: '300px', textAlign: 'center', borderBottom: '1px solid #E0E5EB', paddingBottom: '5px' }}>
                            <button
                                type="button"
                                style={{ marginRight: '10px' }}
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
                        <td style={{ width: '100px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>1</td>
                        <td style={{ width: '200px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>pending</td>
                        <td style={{ width: '300px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>refill</td>
                        <td style={{ width: '300px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>name</td>
                        <td style={{ width: '200px', textAlign: 'center', borderBottom: '1px solid #E0E5EB' }}>100.00</td>
                        {/* {!isTraining && ( */}
                        <td style={{ width: '300px', textAlign: 'center', borderBottom: '1px solid #E0E5EB', paddingBottom: '5px'  }}>
                            <button
                                type="button"
                                style={{ marginRight: '10px' }}
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
                        <td style={{ width: '100px', textAlign: 'center' }}>1</td>
                        <td style={{ width: '200px', textAlign: 'center' }}>pending</td>
                        <td style={{ width: '300px', textAlign: 'center' }}>refill</td>
                        <td style={{ width: '300px', textAlign: 'center' }}>name</td>
                        <td style={{ width: '200px', textAlign: 'center' }}>100.00</td>
                        {/* {!isTraining && ( */}
                        <td style={{ width: '300px', textAlign: 'center' }}>
                            <button
                                type="button"
                                style={{ marginRight: '10px' }}
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