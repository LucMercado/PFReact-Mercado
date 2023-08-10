const CartWidget = () => {
    return (
        <div>
            <button className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart-dash"></i>
                <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                    2
                    <span className="visually-hidden">Cantidad de productos en el carrito</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget