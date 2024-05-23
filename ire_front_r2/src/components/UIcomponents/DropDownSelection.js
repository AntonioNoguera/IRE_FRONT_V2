import React, { useState, useEffect } from 'react';
import './../../mainStyles.css'; 
import styles from './dropdownselection.module.css';

const componentStyles = {  
    backgroundImage: `url('${process.env.PUBLIC_URL}/svgs/arrow_dropdown.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
};

const DropDownSelection = ({ placeHolder, selectedOption = "", optionsAvailable = [], onChange }) => {
    const [selected, setSelected] = useState(selectedOption);

    useEffect(() => { 
        setSelected(selectedOption);
    }, [selectedOption]);

    const handleChange = (event) => {
        setSelected(event.target.value);
        onChange(event);
    };

    return (  
        <select 
            style={componentStyles} 
            required 
            className={styles.selectStyle} 
            value={selected} 
            onChange={handleChange}
        >
            <option value="" disabled>{placeHolder}</option> 
            {optionsAvailable.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select> 
    );
}

export default DropDownSelection;
