import { useState, useEffect } from 'react';
import { getProducts, updateProductStock } from './firebase'; // Asume que tienes funciones para obtener productos y actualizar el stock

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    const handleStockChange = (id, newStock) => {
        updateProductStock(id, newStock);
    };

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Stock actual: {product.stock}</p>
                    <input type="number" onChange={(e) => handleStockChange(product.id, e.target.value)} placeholder="Nuevo stock" />
                </div>
            ))}
        </div>
    );
};

export default ProductList;