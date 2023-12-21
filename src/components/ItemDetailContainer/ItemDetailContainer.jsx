import { useState, useEffect } from "react";
import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
    const [loading, setLoading] = useState (true)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        pedirDatos(true)   
            .then((data) => {
                setItem( data.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => setLoading(false));    
    },  []) 

    return (
        <>
        {loading ? (
                <h2 className="text-center text-4xl mt-8">Cargando...</h2>
            ) : (
                <ItemDetail item={item}/>
            )}
        </>
    );
};

export default ItemDetailContainer;