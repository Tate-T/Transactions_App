import s from './ImportExportBtns.module.css';

const ImportExportBtns = () => {

    return (
        <div className={s.btns}>
            <button className={s.btn}>Import</button>
            <button className={s.btn}>Export</button>
        </div>
    )
}

export default ImportExportBtns;