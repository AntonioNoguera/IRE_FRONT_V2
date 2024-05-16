const componentStyles = {
    display: 'flex',  
    height: '100vh',
    marginLeft : '467px',
    width: '100%',
}

const PageHolder = ({children}) =>{
    return(
        <div style = {componentStyles}>
            {children}
        </div>
    )
}

export default PageHolder;