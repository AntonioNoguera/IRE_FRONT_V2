import styles from "./sidebar.module.css";
import SideBarAtom from "./SidebarAtom"
import '../../mainStyles.css'

const Sidebar = ({routePages}) => { 

    return (
        <div className={styles.sidebar}> 
            <ul>
                {routePages.map( (page,index) => (
                        <SideBarAtom key = {index} to = {page.path}  icon= {page.icon}> 
                            {page.name} 
                        </SideBarAtom>
                    )
                )
                }
            </ul>
        </div>
    )
}

export default Sidebar;