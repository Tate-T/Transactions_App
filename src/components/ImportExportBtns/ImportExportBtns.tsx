import React from 'react';
import s from './ImportExportBtns.module.css';

const ImportExportBtns: React.FC  = () => {

    return 
       ( <div className={s.btns}>
            <a href="#" download className={s.btn}>Import</a>
            <a href="#" download className={s.btn}>Export</a>
        </div>)
    //     <div style={{display: flex }}>
    //     <a href="#" download style={{height: '30px', width: '100px', background-color: 'aliceblue', box-shadow: '2px 2px', border-radius: '3px'}}>Import</a>
    //     <a href="#" download style={{height: '30px', width: '100px', background-color: 'aliceblue', box-shadow: '2px 2px', border-radius: '3px'}}>Export</a>
    // </div>
    
}

export  {ImportExportBtns};