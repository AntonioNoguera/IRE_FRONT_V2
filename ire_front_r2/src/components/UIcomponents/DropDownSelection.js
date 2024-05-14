import './../../mainStyles.css'; 
import styles from './dropdownselection.module.css';  // Asegúrate de que el path es correcto

const DropDownSelection = ({ children, options }) => {
    return (  
        <select required className = {styles.selectStyle}>
            <option value="" disabled selected className={styles.selectPlaceholder}>
                {children}
            </option> 

            <option value="" >
                Lorem Text
            </option> 
        </select> 
    );
}

export default DropDownSelection;
