import { useState } from 'react';
import uuid from 'uuid';
import {ISelect} from '../../types/data';
// import s from './TransactionsStatusList.module.css';

const TransactionsStatusList: React.FC  = () => {
const [value, setValue] = useState('');
const [status, setStatus]= useState<ISelect>([]);
// const [status, setStatus]= useState([{number || string, string, boolean}]);


const idStatus: Number = uuid();

const chooseStatus = () => {
    if (value) {
        setStatus([...status, {
            id: idStatus,
            title: value,
            isSelect: false
        }])
    }
    setStatus('')
}

    return (
        <div>
            <input
                type="text"
                name="status"
                list="transactionsStatus"
                autoComplete='off'
                placeholder="status"
                className={s.statusList}
                value={value}
                onChange={e=> setValue(e.target.value)}
            />
            <datalist id="transactionsStatus">
                <option value="- pending" onClick={chooseStatus}/>
                <option value="- completed" />
                <option value="- cancelled" />
                {/* {transactions.map(transaction => (
                    <option value={transaction.title} key={transaction._id} />
                ))} */}
            </datalist>
        </div>
    )
}

export  {TransactionsStatusList};