import { useState, useEffect, useContext } from "react";
import Boton from "../styles/Global/Boton";
import QuantitySelector from "./QuantitySelector";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



const ItemDetail = ({ item }) => {
    const navigate = useNavigate ()
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    console.log( isInCart(item.id) )

    const handleAgregar = () => {
        const itemToCard = {
            ...item,
            cantidad,
        }

        addToCart(itemToCard)
    }

    const handleVolver = () => {
        navigate (-1)
    }
    const handleInicio = () => {
        navigate ("/")
    }

    return (
        <div className="container m-auto my-8">
            <Boton onClick={handleVolver}>Volver</Boton>
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <hr />
            <div className="flex gap-8 pt-4 ">
                <img className="size-80" src={item.img} alt={item.name} />

                <div>
                    <p>{item.description}</p>
                    <p className="text-xl font-bold">Precio $: {item.price}</p>

                    {
                        isInCart(item.id)
                            ?<>
                            <Boton><Link to="/cart">Terminar compra</Link></Boton>
                            <Boton onClick={handleInicio}>Seguir comprando</Boton>
                            </> 
                            : <>
                                <QuantitySelector 
                                    cantidad ={cantidad}
                                    stock={item.stock}
                                    setCantidad={ setCantidad }
                                />
                                {<Boton onClick={handleAgregar}>Agregar al carrito</Boton>}            
                            </>                       
                    }
                    
                </div>

            </div>

        </div>
    );
};

export default ItemDetail