const componentStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1', 
}

const MainContainer = ({children}) => {
    return( 
        
        <div style = {componentStyles}>
            { children }
        </div>
    )
}

export default MainContainer;