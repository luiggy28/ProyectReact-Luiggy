import logo from '../../assets/Logo_Final.png'
import NavLink from './NavLink'


const Navbar = () => {

    return (
        <header className="bg-silver dark:bg-black">
            <div className="coontainer max-w-7xl m-auto py-6 flex justify-between items-center">
                {/* <h1 className="header__title">LOGO</h1> */}
                <img className="" src={ logo } alt="Logo" />

                <nav className="flex gap-4">
                    <NavLink href={"#"} text={"Estudio"}/>
                    <NavLink href={"#"} text={"Micrófonos"}/>
                    <NavLink href={"#"} text={"Percusión"}/>
                    <NavLink href={"#"} text={"Guitarras"}/>
                    <NavLink href={"#"} text={"Pianos"}/>
                    <NavLink href={"#"} text={"Vientos"}/>
                </nav>

                {/* <CartWidget /> */}
            </div>
        </header>
    )
}

export default Navbar
