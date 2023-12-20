
const NavLink = ({href, text}) => {

    return (
        <a 
            className="text-black hover:text-sky-800 text-lg uppercase font-semibold" 
            href={href}
        >
            {text}
        </a>
    );
};

export default NavLink;