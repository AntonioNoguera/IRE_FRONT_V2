import React, { useState,useEffect } from 'react';
import './editText.module.css';

const componentStyles = { 
    textAlign: 'center',
    fontWeight: '450',
    border: 'none',
    borderRadius: '20px',
    backgroundColor: 'var(--ire-yellowInput)',
    fontSize: '20px', 
    outline: 'none',
    paddingBlock: '5px',
    boxShadow: '0px 10px 10px 0px var(--ire-lightGray)',
    width: '100%',
};

const EditText = ({ placeholder, previousValue = '', onChange }) => {
    const [inputValue, setInputValue] = useState(previousValue); 

    useEffect(() => {
        setInputValue(previousValue);  // Asegura que el estado interno se actualice cuando cambie previousValue
    }, [previousValue]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <input 
            type="text" 
            value={inputValue} 
            placeholder={placeholder}
            onChange={handleChange}
            style={componentStyles}
        />
    );
};

export default EditText;
