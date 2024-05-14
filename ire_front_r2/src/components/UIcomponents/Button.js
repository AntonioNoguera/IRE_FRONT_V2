import './../../mainStyles.css';
import styles from './button.module.css';

const Button = ({ children, type = 'proceedStyle' }) => {
    return (
        <button className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;