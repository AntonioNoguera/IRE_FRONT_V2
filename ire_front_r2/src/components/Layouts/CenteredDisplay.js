const componentStyles = {
    backgroundColor : 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
}

const CenteredDisplay = ({children}) => {
    return(
        <div style = {componentStyles} >
            { children }
        </div>
    )
}

export default CenteredDisplay;

