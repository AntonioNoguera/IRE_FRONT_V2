import './../../mainStyles.css'; 

import './editText.module.css';  

import React, { useState } from 'react';

const componentStyles = { 
    textAlign: 'center',
    fontWeight: '450',
    border: 'none',
    borderRadius : '20px',
    backgroundColor : 'var(--ire-yellowInput)',
    fontSize: '20px', 
    outline:'none',
    paddingBlock:'5px',
    boxShadow: '0px 10px 10px 0px var(--ire-lightGray) ', 
    width: '100%',
}

const EditText = ({ children, previousValue = '' }) => {
    const [value, setValue] = useState(previousValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <input 
            type="text" 
            value={value} 
            placeholder={children} 
            onChange={handleChange} 
            style={componentStyles} 
        /> 
    );
};

export default EditText;

