import './../../mainStyles.css'; 
import React, { useState } from 'react';

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

const EditText = ({ children, previousValue = '' }) => {
    const [value, setValue] = useState(previousValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <textarea 
            value={value}
            placeholder={children}
            style={componentStyles}
            onChange={handleChange}
        />
    );
}

export default EditText;