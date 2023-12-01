export const Producto = ({ nombre, valor, categoria }) => {

    const valorEnCLP = valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

    return (
        <li>
            <h3>{ nombre }</h3>
            <p>Valor: { valorEnCLP }</p>
            <p>Categoria: { categoria }</p>
        </li>
    )
}