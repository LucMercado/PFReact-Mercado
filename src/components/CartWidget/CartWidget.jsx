import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { getCartQuantity } from "../../utils"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const { cart } = useContext(CartContext)

    const quantity = getCartQuantity(cart)

    return (
        <div>
            <Link to="PFReact-Mercado/checkout" className="navbar-brand">
                <button className="btn btn-outline-primary position-relative">
                    <i className="bi bi-cart-dash"></i>
                    {quantity > 0 ? <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                        {quantity}
                        <span className="visually-hidden">Cantidad de productos en el carrito</span>
                    </span> : ""}

                </button>
            </Link>
        </div>
    )
}

export default CartWidget