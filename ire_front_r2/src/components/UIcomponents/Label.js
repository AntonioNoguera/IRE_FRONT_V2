import './../../mainStyles.css'; 

const Label = ({children, marginTop= '4vh', color = 'var(--ire-black)' , fontWeight  = 'var(--ire-Bold)'} )=> {
    const componentStyles = {
        color: color,
        marginTop: marginTop,
        fontSize : '20px',
        paddingLeft : '20px',
        fontWeight : fontWeight,
        opacity: '80%',
        textAlign : 'start'
    }

    return (
        <p style = {componentStyles} >
            <label>{ children }</label>
        </p>
    )
}

export default Label;