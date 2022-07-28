import s from './TransactionsTable.module.css';

const TransactionsTable: React.FC  = () => {

    return (
        <div className={s.listScroll}>
            <table className={s.transactionsListTable}>
                <thead>
                    <tr className={s.transactionsList}>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                            className={s.transactionTitle}
                        >
                            Id
                        </th>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                            className={s}
                        >
                            Status
                        </th>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                            className={s}
                        >
                            Type
                        </th>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                            className={s}
                        >
                            Client name
                        </th>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                            className={s}
                        >
                            Amount
                        </th>
                        <th
                            style={{ borderBottom: '1px solid #E0E5EB' }}
                            className={s}
                        >
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody className={s.tableText}>
                    <tr className={s.tableRow}>
                        {/* <td className={`${s.flexCenter} ${s.tableBorder}`}>
                            <Training className={s.marginBook} />
                            {title}
                        </td> */}
                        <td className={s.tableBorder}>1</td>
                        <td className={s.tableBorder}>pending</td>
                        <td className={s.tableBorder}>refill</td>
                        <td className={s.tableBorder}>name</td>
                        <td className={s.tableBorder}>100.00</td>
                        {/* {!isTraining && ( */}
                        <td className={`${s.iconDelete} ${s.book} ${s.tableBorder}`}>
                            <button
                                type="button"
                                // onClick={() => editTransactio(_id)}
                                className={`${s.editBtn} ${s.tableBorder}`}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                // onClick={() => deleteTransactio(_id)}
                                className={`${s.deleteBtn} ${s.tableBorder}`}
                            >
                                Delete
                            </button>
                        </td>
                        {/* )} */}
                    </tr>
                    <tr className={s.tableRow}>
                        {/* <td className={`${s.flexCenter} ${s.tableBorder}`}>
                            <Training className={s.marginBook} />
                            {title}
                        </td> */}
                        <td className={s.tableBorder}>1</td>
                        <td className={s.tableBorder}>pending</td>
                        <td className={s.tableBorder}>refill</td>
                        <td className={s.tableBorder}>name</td>
                        <td className={s.tableBorder}>100.00</td>
                        {/* {!isTraining && ( */}
                        <td className={`${s.iconDelete} ${s.book} ${s.tableBorder}`}>
                            <button
                                type="button"
                                // onClick={() => editTransactio(_id)}
                                className={`${s.editBtn} ${s.tableBorder}`}
                            >
                                Edit
                            </button><button
                                type="button"
                                // onClick={() => deleteTransactio(_id)}
                                className={`${s.deleteBtn} ${s.tableBorder}`}
                            >
                                Delete
                            </button>
                        </td>
                        {/* )} */}
                    </tr>
                    <tr className={s.tableRow}>
                        {/* <td className={`${s.flexCenter} ${s.tableBorder}`}>
                            <Training className={s.marginBook} />
                            {title}
                        </td> */}
                        <td className={s.tableBorder}>1</td>
                        <td className={s.tableBorder}>pending</td>
                        <td className={s.tableBorder}>refill</td>
                        <td className={s.tableBorder}>name</td>
                        <td className={s.tableBorder}>100.00</td>
                        {/* {!isTraining && ( */}
                        <td className={`${s.iconDelete} ${s.book} ${s.tableBorder}`}>
                            <button
                                type="button"
                                // onClick={() => editTransactio(_id)}
                                className={`${s.editBtn} ${s.tableBorder}`}
                            >
                                Edit
                            </button><button
                                type="button"
                                // onClick={() => deleteTransactio(_id)}
                                className={`${s.deleteBtn} ${s.tableBorder}`}
                            >
                                Delete
                            </button>
                        </td>
                        {/* )} */}
                    </tr>
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
        </div >
    )
}

export  {TransactionsTable};