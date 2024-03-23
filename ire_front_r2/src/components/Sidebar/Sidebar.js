import styles from "./sidebar.module.css";
import SideBarAtom from "./SidebarAtom"
import '../../mainStyles.css'


const sideBarFormat = [
    {
        to : "/",
        name : "Inicio",
        icon : "documento.png"
    },
    {
        to : "/sales",
        name : "Ventas",
        icon : "bolsa-frutas.png"
    },
    {
        to : "/clients",
        name : "Clientes",
        icon : "recetas.png"
    },
    {
        to : "/clients",
        name : "Clientes",
        icon : "recetas.png"
    },
    {
        to : "/clients",
        name : "Clientes",
        icon : "recetas.png"
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