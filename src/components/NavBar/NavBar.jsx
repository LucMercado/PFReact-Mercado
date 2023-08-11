import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary-780000" style={{backgroundColor: "#780000"}}>
            <div className="container-fluid">
                <a href="#" className="navbar-brand">HYM MATERIALES</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Nosotros</a>
                        </li>
                    </ul>
                </div>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar