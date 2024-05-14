const CenteredDisplay = ({ children, width = '80%', height = 'auto' }) => {
    const componentStyles = {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        width: width,
        height: height
    };
    
    return (
        <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <div style={componentStyles}>
                {children}
            </div>
        </div>
    );
}

export default CenteredDisplay;