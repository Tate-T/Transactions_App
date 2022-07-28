import s from './ImportExportBtns.module.css';

const ImportExportBtns: React.FC  = () => {

    return (
        <div className={s.btns}>
            <a href="#" download className={s.btn}>Import</a>
            <a href="#" download className={s.btn}>Export</a>
        </div>
    )
}

export  {ImportExportBtns};