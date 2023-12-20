import logo from '../../assets/Logo_Final.png'
import carrito from '../../assets/Carrito_ok.png'


const Navbar = () => {

    return (
        <header className="bg-silver">
            <div className="coontainer m-auto py-6 flex justify-between items-center">
                {/* <h1 className="header__title">LOGO</h1> */}
                <img className="" src={ logo } alt="Logo" />

                <nav className="flex gap-4">
                    <a className="text-black hover:text-sky-800 text-lg uppercase font-semibold" href="#">Categoria</a>
                    <a className="text-black hover:text-sky-800 text-lg uppercase font-semibold" href="#">Marca</a>
                    <a className="text-black hover:text-sky-800 text-lg uppercase font-semibold" href="#">Precios</a>
                    <img className='' href="#" src={ carrito } link rel="stylesheet" alt="Carrito" />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
