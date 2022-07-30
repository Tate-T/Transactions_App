import React from 'react';
import { TransactionsStatusList } from '../TransactionsStatusList/TransactionsStatusList';
// import { ISelect } from '../../types/data';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 10px;
    border: 2px solid;
    width: 200px;
    min-height: 200px;
`
const Title = styled.h1`
    margin: 0;
    padding: 0;
    margin-left: 5px;
    font-size: 16px;
    background-color: cornflowerblue;
    text-align: center;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    border-top: 2px solid;
`

// const ListItem = styled.h1`
//     margin-left: 25px;
// `
let props: {
    id: number;
    title: string;
    isSelect: boolean
  }
const TransactionsList: React.FC  = (props) => {
   
    return (
        <Container>
            <Title>Transactions</Title>
            <List>
                {/* {props.map(el=> <TransactionsStatusList key={el.id} {...el}/>)} */}
                {/* <TransactionsStatusList /> */}
            </List>
        </Container>
    )
}

export  {TransactionsList};