import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {

    return (
        <section className="container max-w-7xl m-auto mt-8 items-center">
            <h2 className="text-4xl font-bold">Productos</h2>
            <hr />

            <div className="flex flex-wrap justify-between gap-10 items-center">
                { productos.map ((item) => <ItemCard key={item.id} item={item} />)}
            </div>
        </section>
    )
};

export default ItemList;