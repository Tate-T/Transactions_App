import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`

const List = styled.h1`
    margin-left: 10px;
    display: block;
`


const TransactionsTypeList: React.FC  = () => {

    return (
        <Container>
            <List>
            <input
                type="text"
                name="type"
                list="transactionsType"
                autoComplete='off'
                placeholder="type"
                value=''
            />
            </List>
           
            <datalist id="transactionsType">
                <option value="- refill" />
                <option value="- withdrawal" />
                {/* {transactions.map(transaction => (
                    <option value={transaction.title} key={transaction._id} />
                ))} */}
            </datalist>
        </Container >
    )
}

export  {TransactionsTypeList};