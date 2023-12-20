

const ItemList = ({productos}) => {

    return (
        <section className="container max-w-7xl m-auto mt-8 items-center">
            <h2 className="text-4xl font-bold">Productos</h2>
            <hr />

            <div className="flex flex-wrap justify-between gap-10 items-center">
                { productos.map ((item) => (
                    <article key={item.id} className="w-80">
                        <img src={item.img} alt={item.name} />
                        <h3 className="text-2xl font-semibold">{item.name}</h3>
                        <hr />
                        <p>{item.description}</p>
                        <p className="text-xl font-bold">Precio: {item.price}</p>
                    </article>
                ))}
            </div>
        </section>
    )
};

export default ItemList;