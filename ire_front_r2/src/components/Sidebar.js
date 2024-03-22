import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="">Inicio</Link>
                </li>
                <li>
                    <Link to="">Ventas</Link>
                </li>
                <li>
                    <Link to="">Clientes</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;