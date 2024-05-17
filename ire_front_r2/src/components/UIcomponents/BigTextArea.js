import './../../mainStyles.css'; 

const componentStyles = { 
    textAlign: 'center',
    fontWeight: '450',
    border: 'none',
    borderRadius : '20px',
    backgroundColor : 'var(--ire-yellowInput)',
    fontSize: '20px', 
    outline:'none',
    paddingInline : '10px',
    paddingBlock:'5px',
    height : '100px',
    boxShadow: '0px 10px 10px 0px var(--ire-lightGray) ', 
    resize:  'none'

}

const EditText = ({children})=> {
    return (
        <textarea type="text" placeholder = {children} style = {componentStyles}></textarea> 
    )
}

export default EditText;