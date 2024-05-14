import './../../mainStyles.css'; 

import './editText.module.css';  

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

const EditText = ({children})=> {
    return (
        <input type="text" placeholder = {children} style = {componentStyles} /> 
    )
}

export default EditText;