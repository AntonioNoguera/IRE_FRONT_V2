
const componentStyles = {
    paddingTop: '15px',
    textAlign: 'center',

    fontWeight: '500',
    fontSize: '40px',

    width: '100%',
}

const Title = ({children})=> {
    return (
        <div style = {componentStyles} >
            { children }
        </div>
    )
}

export default Title;