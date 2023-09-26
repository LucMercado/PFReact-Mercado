import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import { getCartTotal, mapCartToOrderItems } from "../utils"
import { serverTimestamp } from "firebase/firestore"
import { createOrder } from "../services"


const Checkout = () => {
    const [orderId, setOrderId] = useState(null)

    const [isLoading, setIsLoading] = useState(false)

    const { cart, clear } = useContext(CartContext)

    const total = getCartTotal(cart)

    const handleCheckout = () => {
        const order = {
            buyer: {},
            items: mapCartToOrderItems(cart),
            total,
            date: serverTimestamp()
        }

        setIsLoading(true)
        createOrder(order)
            .then((docRef) => {
                setOrderId(docRef.id)
                setIsLoading(false)
                clear()
            })
            
    }

    return (
        <div>
            <h1>CHECKOUT</h1>
            {orderId && <p>Su orden ha sido creada con éxito. Su id es: {orderId}</p>}

            {!orderId && (
                <>
                    <div>
                        <h2>Resumen de la compra</h2>
                        <h3>Productos:</h3>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id}>
                                    <h4>{item.name}</h4>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio por unidad: ${item.price}</p>
                                    <p>Subtotal: ${item.price * item.quantity}</p>
                                    <hr />
                                </li>
                            ))}
                        </ul>

                        <p>Total de la compra: ${total}</p>
                    </div>

                    <div>
                        <h3>Formulario de contacto</h3>
                        {/* TODO: Formulario */}
                    </div>

                    <button onClick={handleCheckout}>Finalizar compra</button>
                    {isLoading && <p>Procesando compra...</p>}
                </>
            )}

        </div>
    )
}

export default Checkout