import './../../mainStyles.css'; 

const componentStyles = { 
    textAlign: 'center',
    fontWeight: '450',
    border: 'none',
    borderRadius : '20px',
    backgroundColor : 'var(--ire-yellowInput)',
    fontSize: '20px', 
    outline:'none',
    paddingBlock:'5px',
    paddingInline: '20px', 
    boxShadow: '0px 10px 10px 0px var(--ire-lightGray) ',  
    resize:  'none',
    appearance: 'none', 
    backgroundImage: `url('${process.env.PUBLIC_URL}/arrow_dropdown.svg')`,
    backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px center', // Usa backticks y comillas simples correctamente


}

const DropDownSelection = ({children, options})=> {
    return (  
        <select style = {componentStyles}>
            <option value="" disabled selected> {children} </option> 
        </select> 
    )
}

export default DropDownSelection;