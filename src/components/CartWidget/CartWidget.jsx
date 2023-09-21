import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { getCartQuantity } from "../../utils"


const CartWidget = () => {
    const { cart } = useContext(CartContext)

    const quantity = getCartQuantity(cart)

    return (
        <div>
            <button className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart-dash"></i>
                <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                    {quantity}
                    <span className="visually-hidden">Cantidad de productos en el carrito</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget