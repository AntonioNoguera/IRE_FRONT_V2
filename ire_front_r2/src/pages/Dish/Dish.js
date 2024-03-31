import { Link, Outlet } from 'react-router-dom';
import styles from './dishes.module.css'

import MainContainer from '../../components/Layouts/MainContainer';

import '../../mainStyles.css'
const Dish = () => {
    return (
        <div className={styles.mainContainer}>
            
            <nav className={styles.leftMenu}>
                <Link className={styles.linkFormat} to="requisicion">Listado de Requisiciones</Link>
                <Link className={styles.linkFormat} to="recetas">Detalle Recetas</Link>
                <Link className={styles.linkFormat} to="ingredientes">Detalle Ingredientes</Link>
            </nav> 

            <MainContainer >
                <Outlet/>
            </MainContainer>
            
        </div>

    )
}

export default Dish;