const HorizontalDisplay = ({ children, width = '100%', height = 'auto', justifyDirection = 'space-evenly' }) => {
    const componentStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: justifyDirection, // Solo se necesita una vez y correctamente configurado
        flexGrow: 1,
        height: height
    };
    
    return (
        <div style={{ display: 'flex', flexGrow: 1, width: width, alignItems : 'center',height: height }}>
            <div style={componentStyles}>
                {children}
            </div>
        </div>
    );
}

export default HorizontalDisplay;
