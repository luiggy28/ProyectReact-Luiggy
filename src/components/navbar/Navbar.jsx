import logo from '../../assets/Logo_Final.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <header className="bg-silver dark:bg-black">
            <div className="coontainer max-w-7xl m-auto py-6 flex justify-between items-center">
                {/* <h1 className="header__title">LOGO</h1> */}
                <img className="" src={ logo } alt="Logo" />

                <nav className="flex gap-4">
                    <Link 
                    to={"/"} 
                    className="text-black dark:text-white hover:text-sky-800 text-lg uppercase font-semibold"
                    >Inicio</Link>

                    <Link 
                    to={"/productos/estudio"}
                    className="text-black dark:text-white hover:text-sky-800 text-lg uppercase font-semibold"
                    >Estudio</Link>

                    <Link 
                    to={"/productos/microfonos"}
                    className="text-black dark:text-white hover:text-sky-800 text-lg uppercase font-semibold"
                    >Micrófonos</Link>

                    <Link 
                    to={"/productos/percusion"}
                    className="text-black dark:text-white hover:text-sky-800 text-lg uppercase font-semibold"
                    >Percusión</Link>

                    <Link 
                    to={"/productos/cuerdas"}
                    className="text-black dark:text-white hover:text-sky-800 text-lg uppercase font-semibold"
                    >Cuerdas</Link>

                    <Link 
                    to={"/productos/pianos"}
                    className="text-black dark:text-white hover:text-sky-800 text-lg uppercase font-semibold"
                    >Pianos</Link>

                    <Link 
                    to={"/productos/vientos"}
                    className="text-black dark:text-white hover:text-sky-800 text-lg uppercase font-semibold"
                    >Vientos</Link>
                    
                </nav>

                {/* <CartWidget /> */}
            </div>
        </header>
    )
}

export default Navbar
