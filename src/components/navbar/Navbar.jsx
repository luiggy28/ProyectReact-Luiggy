import logo from '../../assets/Logo_Final.png'
import carrito from '../../assets/Carrito_ok.png'
import lista from '../../assets/Lista_ok.png'


const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                {/* <h1 className="header__title">LOGO</h1> */}
                <img className='navbar__logo' src={ logo } alt="Logo" />

                <nav className="navbar">
                    <a className="navbar__link" href="#">Categoria</a>
                    <a className="navbar__link" href="#">Estado del Producto</a>
                    <a className="navbar__link" href="#">Marca</a>
                    <a className="navbar__link" href="#">Precios</a>
                    <img className='navbar__list' href="#" src={ lista } link rel="stylesheet" alt="Lista" />
                    <img className='navbar__car' href="#" src={ carrito } link rel="stylesheet" alt="Carrito" />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
