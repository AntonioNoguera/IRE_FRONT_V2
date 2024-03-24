import styles from "./sidebar.module.css";
import SideBarAtom from "./SidebarAtom"
import '../../mainStyles.css'

const sideBarFormat = [
    {
        to : "/",
        name : "Requisición",
        icon : "documento.png"
    },
    {
        to : "/platillos",
        name : "Platillos",
        icon : "cuenco-arroz.png"
    },
    {
        to : "/recetas",
        name : "Recetas",
        icon : "recetas.png"
    },
    {
        to : "/ingredientes",
        name : "Ingredientes",
        icon : "bolsa-frutas.png"
    },
    {
        to : "/grupos",
        name : "Grupos",
        icon : "grupo.png"
    },
    
]

const Sidebar = () => {
    return (
        <div className={styles.sidebar}> 
            <ul>
                {sideBarFormat.map( (item,index) => (
                        <SideBarAtom to={item.to} icon= {item.icon}> {item.name} </SideBarAtom>
                    )
                )
                }
            </ul>
        </div>
    )
}

export default Sidebar;