import './../../mainStyles.css'; 

const componentStyles = {
    color: 'var(--ire-black)',
    marginTop: '5vh',
    fontSize : '20px',
    paddingLeft : '20px',
    fontWeight : 'var(--ire-Bold)',
    opacity: '80%'

}

const Label = ({children})=> {
    return (
        <p style = {componentStyles} >
            <label>{ children }</label>
        </p>
    )
}

export default Label;