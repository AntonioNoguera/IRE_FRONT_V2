const CenteredDisplay = ({ children, width = '80%' }) => {
    const componentStyles = {
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    };
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center' ,alignItems: 'center'}}>
            <div style={componentStyles}>
                {children}
            </div>
        </div>
    );
}

export default CenteredDisplay;