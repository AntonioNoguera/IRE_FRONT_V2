import { Link , useLocation } from 'react-router-dom';
import styles from "./subsidebar.module.css"; 

const SubSidebarItem = ({path, children}) => {
    const location = useLocation();

    var firstRoute = location.pathname.split("/")
    var firstPart = firstRoute[2]
    
    
    if(firstRoute.length === 2){
        firstPart = firstRoute[1]
    }
    const isActive = (path === firstPart) 
    
    return(
        <Link className = { isActive ? styles.test : styles.defaulState }  to = {path} >{children}</Link>
    )
}

const SubSideBar = ({content}) => {

    return(
        <nav className={styles.leftMenu}>
        {content.subPaths.map((route, index) => (
                <SubSidebarItem path = {route.path} key = {index} > {route.name} </SubSidebarItem>
            ))
        }
        </nav>
    )
}

export default SubSideBar;