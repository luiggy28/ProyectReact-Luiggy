import { useState, useEffect } from "react";
import Boton from "../styles/Global/Boton";
import QuantitySelector from "./QuantitySelector";



const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    const [color, setColor] = useState(1)

    

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
            color
        }

        console.log
    }

    return (
        <div className="container m-auto my-8">
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <hr />
            <div className="flex gap-8 pt-4">
                <img src={item.img} alt={item.name} />

                <div>
                    <p>{item.description}</p>
                    <p className="text-xl font-bold">Precio: {item.price}</p>

                    <QuantitySelector 
                        cantidad ={cantidad}
                        stock={item.stock}
                        setCantidad={ setCantidad }
                    />

                    <select>
                        <option>Original</option>
                        <option>Custom</option>
                    </select>

                {<Boton onClick={handleAgregar}>Agregar al carrito</Boton>}            
                </div>

            </div>

        </div>
    );
};

export default ItemDetail