import s from './Header.module.css';

const Header: React.FC = () => {

    return (
        <div className={s.container}>
            <h1 className={s.title}>Transactions App</h1>

        </div>
    )
}

export default Header;