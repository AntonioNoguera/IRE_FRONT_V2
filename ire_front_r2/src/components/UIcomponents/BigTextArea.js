import './../../mainStyles.css'; 
import React, { useState, useEffect } from 'react';

const componentStyles = { 
    textAlign: 'center',
    fontWeight: '450',
    border: 'none',
    borderRadius: '20px',
    backgroundColor: 'var(--ire-yellowInput)',
    fontSize: '20px', 
    outline: 'none',
    paddingInline: '10px',
    paddingBlock: '5px',
    height: '100px',
    boxShadow: '0px 10px 10px 0px var(--ire-lightGray)', 
    resize: 'none'
};

const BigTextArea = ({previousValue = '', onChange, placeholder}) => {
    const [value, setValue] = useState(previousValue);

    useEffect(() => {
        setValue(previousValue);  // Asegura que el estado interno se actualice cuando cambie previousValue
    }, [previousValue]);

    const handleChange = (event) => {
        setValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <textarea 
            value={value}
            placeholder={placeholder}
            style={componentStyles}
            onChange={handleChange}
        />
    );
}

export default BigTextArea;