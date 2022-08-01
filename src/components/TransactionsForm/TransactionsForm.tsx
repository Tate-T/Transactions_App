import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import uuid from 'uuid';
import {ISelect} from '../../types/data';
import { addToFilterState } from '../../redux/transactions/transactions-actions';
import { sendFilteredTransactions } from '../../redux/transactions/transactions-types';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0px 450px 10px 0px; 
    display: flex;
`;

const TransactionsStatusList = styled.div`
padding: 0;
`;

const TransactionsTypeList = styled.div`
padding: 0;
`;

const List = styled.div`
    color: black;
    display: block;
`;

const TransactionsForm: React.FC<ISelect>  = (filtered: ISelect, addToFilterState: void) => {

    const dispatch = useDispatch();

    const { handleSubmit, reset } = useForm();

    // const { handleSubmit, formState, reset } = useForm();
    // const { errors } = formState;

    const onSubmit = (filteredTransactions: ISelect) => {
        dispatch(sendFilteredTransactions(filteredTransactions));
    
        reset();
      };

// const [value, setValue] = useState('');
// const [status, setStatus]= useState<ISelect>([]);
// const [status, setStatus]= useState([{number || string, string, boolean}]);


// const idStatus: Number = uuid();

// const chooseStatus = () => {
//     if (value) {
//         setStatus([...status, {
//             id: idStatus,
//             title: value,
//             isSelect: false
//         }])
//     }
//     setStatus('')
// }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TransactionsStatusList>
            <List>
            <input
                type="text"
                name="status"
                list="transactionsStatus"
                autoComplete='off'
                placeholder="status"
                // value={value}
                value={filtered}
                onChange={(e) => { addToFilterState(e.target.value) }}
                // onChange={e=> setValue(e.target.value)}
            />
            </List>
            <datalist id="transactionsStatus">
                <option value="pending" 
                // onClick={chooseStatus}
                />
                <option value="completed" />
                <option value="cancelled" />
                {/* {transactions.map(transaction => (
                    <option value={transaction.title} key={transaction._id} />
                ))} */}
            </datalist>
            </TransactionsStatusList>
            <TransactionsTypeList>
            <List>
            <input
                type="text"
                name="type"
                list="transactionsType"
                autoComplete='off'
                placeholder="type"
                value={filtered}
                onChange={(e) => { addToFilterState(e.target.value) }}
            />
            </List>
            <datalist id="transactionsType">
                <option value="- refill" />
                <option value="- withdrawal" />
                {/* {transactions.map(transaction => (
                    <option value={transaction.title} key={transaction._id} />
                ))} */}
            </datalist>
            </TransactionsTypeList>
            </form>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFilterState: (filtered: ISelect) => dispatch(addToFilterState(filtered)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsForm);

// export  {TransactionsStatusList};