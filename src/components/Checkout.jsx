import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import { getCartTotal, mapCartToOrderItems } from "../utils"
import { serverTimestamp } from "firebase/firestore"
import { createOrder } from "../services"
import Field from "./Field/Field"


const Checkout = () => {
    const [orderId, setOrderId] = useState(null)

    const [isLoading, setIsLoading] = useState(false)

    const { cart, clear } = useContext(CartContext)

    const total = getCartTotal(cart)

    const handleCheckout = () => {
        const order = {
            buyer: {name, phone, email},
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

    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const { name, phone, email } = formState;

    const onChange = (event) => {
        setFormState({

            ...formState,
            [event.target.name]: event.target.value,

        });
    };

    const isFormValid = name && phone && email;

    const onSubmit = (event) => {
        event.preventDefault();

        if (isFormValid) {
            console.log(`Your name is ${name} your phone ${phone} and you email ${email} `);
        }
    };

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

                        <form onSubmit={onSubmit}>
                            <Field label="Nombre" name="name" onChange={onChange} />
                            <Field label="Teléfono" name="phone" onChange={onChange} />
                            <Field label="Email" name="email" onChange={onChange} />
                            

                        </form>
                    </div>

                    <button disabled={!isFormValid} type="submit" onClick={handleCheckout}>Finalizar compra</button>
                    {isLoading && <p>Procesando compra...</p>}
                </>
            )}

        </div>
    )
}

export default Checkout