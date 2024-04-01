const subComponentStyles = {
    backgroundColor: 'blue'
}

const HorizontalHolder = ({ children }) => {
    return(
        <div style={subComponentStyles}>
            { children }        
        </div>
    )
}

const componentStyles = {
    padding : '20px 20px',
    display : 'flex',
    justifyContent : 'space-around',
    flexDirection: 'row',
    backgroundColor : 'red'
}

const HorizontalSpray = ({itemsToSpray}) => {
    return(
        <div style={componentStyles}>
            {
                itemsToSpray.map((item,index)=>(
                    <HorizontalHolder>
                        {item.name}
                    </HorizontalHolder>
                ))
            }
        </div>
    )

}

export default HorizontalSpray;