import React from 'react';
import styled from 'styled-components';
// import { Button } from 'react-bootstrap';

const Container = styled.div`
  display: flex;
`
const Btn = styled.div`
  height: 30px;
    width: 100px;
    background-color: aliceblue;
    box-shadow: 2px 2px;
    border-radius: 3px;
    margin-left: 30px;
    margin-right: 0;
    /* .btn:not(:first-child) {
    margin-left: 15px;
} */
`

const ImportExportBtns: React.FC  = () => {

    return ( <Container>
      {/* <Button> */}
        <Btn>
            <a href="/" download style={{ paddingLeft: '30px', textDecoration: 'none'}}>Import</a>
        </Btn>
        {/* </Button> */}
        <Btn>
            <a href="/" download style={{ paddingLeft: '25px', textDecoration: 'none'}}>Export</a>
        </Btn>
         </Container>)
    //     <div style={{display: flex }}>
    //     <a href="#" download style={{height: '30px', width: '100px', background-color: 'aliceblue', box-shadow: '2px 2px', border-radius: '3px'}}>Import</a>
    //     <a href="#" download style={{height: '30px', width: '100px', background-color: 'aliceblue', box-shadow: '2px 2px', border-radius: '3px'}}>Export</a>
    // </div>
    
}

export  {ImportExportBtns};