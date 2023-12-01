import { Producto } from "./producto";

export const Productos = () => {
    
    const listaProductos = [
        { nombre: "Micrófono AKG C414", valor: 1200, categoria: "Categoría E" },
        { nombre: "Micrófono Neumann U 87", valor: 3200, categoria: "Categoría E" },
        { nombre: "Micrófono Universal Audio Bock 167", valor: 3400, categoria: "Categoría E" },
        { nombre: "Monitor Estudio Focal Trio6 St6", valor: 3500, categoria: "Categoría M" },
        { nombre: "Monitor Estudio Neumann KH 150", valor: 2000, categoria: "Categoría M" },
        { nombre: "Monitor Estudio Yamaha HS7W", valor: 460, categoria: "Categoría M" },
        { nombre: "Controlador M-Audio Hammer 88 / USB 88 teclas", valor: 500, categoria: "Categoría C" },        
        { nombre: "Controlador Arturia KEYLABESS61 MK3 USB/MIDI 61 Teclas Essentials", valor: 300, categoria: "Categoría C" },       
        { nombre: "Controlador M-Audio Oxygen 49 MKV 49 Teclas", valor: 130, categoria: "Categoría C" }        
    ];


    return (
        <section className="productos-container">
            <h2>Productos</h2>
            <ul>
                {listaProductos.map((producto) => (
                    <Producto
                        nombre={producto.nombre} 
                        valor={producto.valor} 
                        categoria={producto.categoria} 
                    />
                ))}
            </ul>
        </section>
    )
}

export default Productos