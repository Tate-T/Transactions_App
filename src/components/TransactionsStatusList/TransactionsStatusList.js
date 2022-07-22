import s from './TransactionsStatusList.module.css';

const TransactionsStatusList = () => {

    return (
        <div>
            <input
                type="text"
                name="status"
                list="transactionsStatus"
                autoComplete='off'
                placeholder="status"
                className={s.statusList}
                value=''
            />
            <datalist id="transactionsStatus">
                <option value="- pending" />
                <option value="- completed" />
                <option value="- cancelled" />
                {/* {transactions.map(transaction => (
                    <option value={transaction.title} key={transaction._id} />
                ))} */}
            </datalist>
        </div>
    )
}

export default TransactionsStatusList;