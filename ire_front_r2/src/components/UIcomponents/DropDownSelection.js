import './../../mainStyles.css'; 
import styles from './dropdownselection.module.css';  // Asegúrate de que el path es correcto

const componentStyles = {  
    backgroundImage: `url('${process.env.PUBLIC_URL}/svgs/arrow_dropdown.svg')`,
    backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px center', // Usa backticks y comillas simples correctamente


}

const DropDownSelection = ({ children, options }) => {
    return (  
        <select  style = {componentStyles} required className = {styles.selectStyle}>
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
