import { Link, Outlet } from 'react-router-dom';
import styles from './dishes.module.css'

const Dishes = () => {
    return (
        <div className={styles.mainContainer}>
            
            <nav className={styles.leftMenu}>
                <Link className={styles.linkFormat} to="requisicion">Detalle Requisición</Link>
                <Link className={styles.linkFormat} to="recetas">Detalle Recetas</Link>
                <Link className={styles.linkFormat} to="ingredientes">Detalle Ingredientes</Link>
            </nav> 
            {/* Outlet renderizará el componente correspondiente a la sub-ruta activa */}
            <Outlet className={styles.outlet} />
        </div>

    )
}

export default Dishes;