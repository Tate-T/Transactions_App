import s from './ImportExportBtns.module.css';

const ImportExportBtns: React.FC  = () => {

    return (
        <div className={s.btns}>
            <button className={s.btn}>Import</button>
            <button className={s.btn}>Export</button>
        </div>
    )
}

export  {ImportExportBtns};