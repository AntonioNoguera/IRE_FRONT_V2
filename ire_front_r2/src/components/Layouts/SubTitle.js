const SubTitle = ({children, textAlignment = 'center', paddingLeft = '50px'})=> {

    const componentStyles = { 
        textAlign: textAlignment,
        color : '#4c4c4c',
        marginInline: '10%',
        paddingLeft :paddingLeft,
        fontWeight: '410',
    
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