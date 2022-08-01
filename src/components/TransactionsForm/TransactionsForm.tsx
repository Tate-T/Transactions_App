import React, {useRef} from 'react';
import { connect, useDispatch } from 'react-redux';
import { useForm, UseFormSetValue } from 'react-hook-form';
// import { useState } from 'react';
// import uuid from 'uuid';
import {ITransaction} from '../../types/data';
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

const TransactionsForm: React.FC<{filtered: ITransaction[], addToFilterState: ITransaction[], sendFilteredTransactions: void}> = ({filtered, addToFilterState, sendFilteredTransactions}) => {

    const dispatch = useDispatch();

    const { reset } = useForm();

    const selectRef = React.createRef<HTMLInputElement>();
    // const selectRef = useRef<HTMLInputElement>('input');

    // const { handleSubmit, formState, reset } = useForm();
    // const { errors } = formState;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {target: {value: selectedInput}} = e;
        addToFilterState(selectedInput) 
    };

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
        const {target: {value: selectedInput}} = e;
        if (selectedInput !== '') {
        dispatch(sendFilteredTransactions(e));
        }
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
            <form onSubmit={onSubmitForm}>
            <TransactionsStatusList>
            <List>
            <input
                type="text"
                name="status"
                list="transactionsStatus"
                autoComplete='off'
                placeholder="status"
                ref={selectRef}
                // value={value}
                value={filtered}
                // onChange={(e: React.MouseEvent<UseFormSetValue>) => { addToFilterState(e.target.value) }}
                onChange={handleInputChange}
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
                ref={selectRef}
                value={filtered}
                // onChange={(e: React.MouseEvent<HTMLSelectElement>) => { addToFilterState(e.target.value) }}
                onChange={handleInputChange}
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