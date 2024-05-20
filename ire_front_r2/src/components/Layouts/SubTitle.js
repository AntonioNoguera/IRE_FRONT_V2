const SubTitle = ({children, textAlignment = 'center', paddingLeft = '50px'})=> {

    const componentStyles = { 
        textAlign: textAlignment,
    
        marginInline: '10%',
        paddingLeft :paddingLeft,
        fontWeight: '450',
    
        fontSize: '30px',
        marginTop: '40px',
        marginBottom : '10px' 
    }
    return (
        <div style = {componentStyles} >
            { children }
        </div>
    )
}

export default SubTitle;