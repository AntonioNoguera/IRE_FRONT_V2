const HorizontalDisplay = ({ children, width = '100%', height = 'auto' }) => {
    const componentStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexGrow: 1,
        height: height
    };
    
    return (
        <div style={{ display: 'flex', flexGrow: 1, width: width, height: height }}>
            <div style={componentStyles}>
                {children}
            </div>
        </div>
    );
}

export default HorizontalDisplay;
