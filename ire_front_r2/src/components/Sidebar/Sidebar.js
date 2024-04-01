import styles from "./sidebar.module.css"; 
import '../../mainStyles.css'

import { NavLink , useLocation } from 'react-router-dom';


const SidebarAtom = ({ children, to, icon }) => {
    const location = useLocation();

    var firstRoute = location.pathname.split("/")
    var firstPart = firstRoute[1] 

    if(firstRoute.length === 2){
        firstPart = firstRoute[0]
    } 
    
    const isActive = (to.slice(1) === firstPart)
    return (
        <li>
            <NavLink  to = {to} className = { isActive ? styles.activeState : styles.defaultState } >

                <img src={`${process.env.PUBLIC_URL}/icons/${icon}`} />
                {children}
                
            </NavLink>
        </li> 
    )
}

const Sidebar = ({routePages}) => { 

    return (
        <div className = { styles.sidebar }> 
            <ul>
                { 
                routePages.map( (page,index) => (
                    <SidebarAtom key={index} to={page.path} icon={page.icon}> 
                        { page.name } 
                    </SidebarAtom>
                    )
                )
                }
            </ul>
        </div>
    )
}

export default Sidebar;