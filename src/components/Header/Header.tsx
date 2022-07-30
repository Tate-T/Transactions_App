import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid;
`

const Title = styled.h1`
  text-align: center;
`

const Header: React.FC = () => {

    return (
        <Container>
            <Title>Transactions App</Title>
        </Container>
    )
}

export  {Header};