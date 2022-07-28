import s from './TransactionsList.module.css';

const TransactionsList: React.FC  = () => {

    return (
        <div className={s.container}>
            <div className={s.title}>
                <h2 >Transactions</h2>
            </div>
            <ul className={s.list}>
                <li className={s.transaction}>
                    transaction
                </li>
            </ul>
        </div>
    )
}

export  {TransactionsList};