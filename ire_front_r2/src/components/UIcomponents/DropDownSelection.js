import React, { useState } from 'react';
import './../../mainStyles.css'; 
import styles from './dropdownselection.module.css';  // Asegúrate de que el path es correcto

const componentStyles = {  
    backgroundImage: `url('${process.env.PUBLIC_URL}/svgs/arrow_dropdown.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center', // Usa backticks y comillas simples correctamente
};

const DropDownSelection = ({ children, selectedOption = "", optionsAvailable = [] }) => {
    console.log(selectedOption)

    const [selected, setSelected] = useState(selectedOption);

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (  
        <select 
            style={componentStyles} 
            required 
            className={styles.selectStyle} 
            value={selected} 
            onChange={handleChange}
        >
            <option value="" disabled  selected className={styles.selectPlaceholder}>
                {children}
            </option> 
            {optionsAvailable.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select> 
    );
}

export default DropDownSelection;
