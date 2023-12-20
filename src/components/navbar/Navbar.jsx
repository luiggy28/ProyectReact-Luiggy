import logo from '../../assets/Logo_Final.png'
import carrito from '../../assets/Carrito_ok.png'
import NavLink from './NavLink'


const Navbar = () => {

    return (
        <header className="bg-silver">
            <div className="coontainer m-auto py-6 flex justify-between items-center">
                {/* <h1 className="header__title">LOGO</h1> */}
                <img className="" src={ logo } alt="Logo" />

                <nav className="flex gap-4">
                    <NavLink href={"#"} text={"Estudio"}/>
                    <NavLink href={"#"} text={"Micrófonos"}/>
                    <NavLink href={"#"} text={"Percusión"}/>
                    <NavLink href={"#"} text={"Guitarras"}/>
                    <NavLink href={"#"} text={"Pianos"}/>
                    <img className='' href="#" src={ carrito } link rel="stylesheet" alt="Carrito" />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
