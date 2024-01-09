import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, setDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
const { cart, totalCart, clearCart } = useContext(CartContext);

const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
});

const [orderId, setOrderId] = useState(null);

const handleInputChange = (e) => {
    setValues({
    ...values,
    [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
    cliente: values,
    items: cart,
    total: totalCart(),
    fecha: new Date(),
    };

    const ordersRef = collection(db, "orders");

    cart.forEach(item => {
        const docRef = doc(db, 'productos', item.id)
        getDoc(docRef)
            .then((docSnapshot) => {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }
                const newStock = doc.stock - item.cantidad
                updateDoc(docRef, {stock: newStock})
            })
    });

    addDoc(ordersRef, orden)
        .then((doc) => {setOrderId(doc.id)
        clearCart()

        Swal.fire("Gracias por tu compra!")
    });
};

if (orderId) {
    return (
    <div className="container m-auto mt-10">
        <h2 className="text-4xl font-semibold">Gracias por tu compra</h2>
        <hr />
        <p>Tu código de orden es: {orderId}</p>
    </div>
    );
}

return (
    <div className="container m-auto mt-10">
    <h2 className="text-4xl font-semibold">Checkout</h2>
    <hr />

    <h4>Ingresta tus datos:</h4>
    <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mt-4"
    >
        <input
        className="border p-2"
        type="text"
        placeholder="Ingresa tu nombre"
        value={values.nombre}
        onChange={handleInputChange}
        name="nombre"
        />

        <input
        className="border p-2"
        type="text"
        placeholder="Ingresa tu dirección"
        value={values.direccion}
        onChange={handleInputChange}
        name="direccion"
        />
        <input
        className="border p-2"
        type="email"
        placeholder="Ingresa tu e-mail"
        value={values.email}
        onChange={handleInputChange}
        name="email"
        />
        <button type="submit" className="bg-blue-500 text-white py-2">
        Enviar
        </button>
    </form>
    </div>
);
};

export default Checkout;