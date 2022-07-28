import s from './TransactionsTypeList.module.css';

const TransactionsTypeList = () => {

    return (
        <div className={s.input}>
            <input
                type="text"
                name="type"
                list="transactionsType"
                autoComplete='off'
                placeholder="type"
                className={s.typeList}
                value=''
            />
            <datalist id="transactionsType">
                <option value="- refill" />
                <option value="- withdrawal" />
                {/* {transactions.map(transaction => (
                    <option value={transaction.title} key={transaction._id} />
                ))} */}
            </datalist>
        </div >
    )
}

export default TransactionsTypeList;