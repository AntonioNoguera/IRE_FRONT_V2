const componentStyles = {
    display : 'flex',
    flexGrown: '1',
    margin: '30px 10%',
    backgroundColor : 'blue',
}

const ComponentHolder = ({children}) => {
    return(
        <div style={componentStyles}>
            {children}
        </div>
    )
}

export default ComponentHolder;