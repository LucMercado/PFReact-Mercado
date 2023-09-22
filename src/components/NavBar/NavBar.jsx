import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary-EDAE49" style={{backgroundColor: "#EDAE49"}}>
            <div className="container-fluid">
            <Link to="PFReact-Mercado/" className="navbar-brand">HYM MATERIALES</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav"> 
                        <li className="nav-item">
                            <NavLink to="PFReact-Mercado/" className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="PFReact-Mercado/category/bolsones" className="nav-link">Bolsones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="PFReact-Mercado/category/ladrillos" className="nav-link">Ladrillos</NavLink>
                        </li>
                        <li className="nav-item">                            
                            <NavLink to="PFReact-Mercado/category/cementos" className="nav-link">Cementos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar