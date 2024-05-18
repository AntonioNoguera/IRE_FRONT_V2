import './../../mainStyles.css';
import styles from './button.module.css';

const mainStyles = {
    fontSize: '24px',
    padding: '6px 20px', 
    border: 'none',
    borderRadius: '20px',
    boxShadow: '0px 10px 10px 0px var(--ire-lightGray)',
    marginTop: '40px',
    cursor: 'pointer',
    fontWeight: '500',
}

const Button = ({ children, type = 'proceedStyle' , onClick}) => {
    return (
        <button style={mainStyles} onClick = {onClick} className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;