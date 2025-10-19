import { NavLink } from "react-router-dom";
import assets from "../../assets/assets";

const Navbar = ({ theme, setTheme }) => {

    return (
        <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
            <img className="w-32 sm:w-40" src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" />
            <div className="flex justify-between list-none gap-8 text-gray-700 dark:text-white font-bold sm:text-sm max-sm:w-60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 sm:items-center transition-all">
                <li >
                    <NavLink to="/" className='sm:hover:border-b'>

                        Home
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to="/services" className='sm:hover:border-b'>
                        Services
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to="/our-work" className='sm:hover:border-b'>
                        Our Work
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to="/contact-us"
                        className='sm:hover:border-b'
                    >
                        Contact Us
                    </NavLink>

                </li>
            </div>
            <div>
                <NavLink to='/contact-us'>
                    <button className="btn btn-info flex items-center rounded-4xl font-bold gap-2">Contact <img src={assets.arrow_icon} width={18} alt="" /></button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;