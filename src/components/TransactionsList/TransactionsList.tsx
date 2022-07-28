import { TransactionsStatusList } from '../TransactionsStatusList/TransactionsStatusList';
import { ISelect } from '../../types/data';
import s from './TransactionsList.module.css';

const TransactionsList: React.FC<ISelect>  = (props) => {

    return (
        <div className={s.container}>
            <div className={s.title}>
                <h2 >Transactions</h2>
            </div>
            <div>
                {props.map(el=> <TransactionsStatusList key={el.id} {...el}  className={s.list}/>)}
            </div>
            {/* <ul className={s.list}>
                <li className={s.transaction}>
                    transaction
                </li>
            </ul> */}
        </div>
    )
}

export  {TransactionsList};