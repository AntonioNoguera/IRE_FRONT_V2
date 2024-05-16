
const componentStyles = { 
    textAlign: 'start',

    marginInline: '10%',
    paddingLeft :'50px',
    fontWeight: '450',

    fontSize: '30px',
    marginTop: '40px',
    marginBottom : '10px' 
}

const SubTitle = ({children})=> {
    return (
        <div style = {componentStyles} >
            { children }
        </div>
    )
}

export default SubTitle;