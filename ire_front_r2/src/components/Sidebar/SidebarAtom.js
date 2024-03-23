import {Link} from 'react-router-dom'

const SidebarAtom = ({children,to,icon})=> {
    return (
        <li>
            
            <Link to={to}>
                <img src={`${process.env.PUBLIC_URL}/icons/${icon}`}/>
                {children}
            </Link>
        </li>

    ) 
}

export default SidebarAtom;