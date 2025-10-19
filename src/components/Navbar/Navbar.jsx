// import { NavLink } from "react-router-dom";
import assets from "../../assets/assets";
import { useState } from "react";
import ThemeToggleBtn from "../ToggleBtn/ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
            <img
                className="w-32 sm:w-40"
                src={theme === "dark" ? assets.logo_dark : assets.logo}
                alt=""
            />

            <div
                className={`flex list-none gap-4 text-gray-700 dark:text-white font-bold ${!sidebarOpen
                    ? "max-sm:w-0 overflow-hidden"
                    : "max-sm:w-60 max-sm:pl-10"
                    } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-info max-sm:text-white max-sm:pt-20 sm:items-center transition-all`}
            >
                <img
                    onClick={() => setSidebarOpen(false)}
                    className="w-5 absolute right-4 top-4 sm:hidden"
                    src={assets.close_icon}
                    alt=""
                />
                <ul className="flex gap-8">
                    <li><a className="hover:text-secondary" href="#hero">Home</a></li>
                    <li><a className="hover:text-secondary" href="#services">Services</a></li>
                    <li><a className="hover:text-secondary" href="#our-work">Our Work</a></li>
                    <li><a className="hover:text-secondary" href="#contact-us">Contact Us</a></li>
                </ul>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">

                <ThemeToggleBtn theme={theme} setTheme={setTheme}></ThemeToggleBtn>

                <img
                    onClick={() => setSidebarOpen(true)}
                    src={
                        theme === "dark"
                            ? assets.menu_icon_dark
                            : assets.menu_icon
                    }
                    className="w-8 sm:hidden"
                    alt=""
                />
                {/* <NavLink to="/contact-us"> */}
                <button className="btn btn-secondary flex items-center rounded-4xl text-xl font-bold max-sm:hidden gap-2">
                    <a href="#contact-us">Contact{" "}</a>
                    <img src={assets.arrow_icon} width={18} alt="" />
                </button>
                {/* </NavLink> */}
            </div>
        </div>
    );
};

export default Navbar;
