import './../../mainStyles.css'; 

const ButtonStyles = { 
        color: 'var(--ire-white)',
        fontSize: '24px',
        padding: '6px 20px',
        border: 'none',
        borderRadius: '20px',
        boxShadow: '0px 10px 10px 0px var(--ire-lightGray) ',
        backgroundColor: 'var(--ire-greenButton)',
        marginTop: '40px',
        width: '100%',
        cursor:'pointer',
        fontWeight: '500'
}

const FooterDisplay = ({children})=> {

    return (
        <button style = {enumStyle} >
            { children }
        </button>
    )
}

export default FooterDisplay;