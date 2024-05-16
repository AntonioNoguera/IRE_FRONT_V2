const HorizontalDisplay = ({ children, width = '100%', height = 'auto', justifyDirection = 'space-evenly' ,classNameSend, flexGrowEnabled = 1}) => {
    const componentStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: justifyDirection, // Solo se necesita una vez y correctamente configurado
        flexGrow: flexGrowEnabled,
        height: height,
    };
    
    return (
        <div className={classNameSend} style={{ display: 'flex', flexGrow: 1, width: width, alignItems : 'center',height: height }}>
            <div style={componentStyles}>
                {children}
            </div>
        </div>
    );
}

export default HorizontalDisplay;
