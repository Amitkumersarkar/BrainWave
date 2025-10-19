import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggleBtn from "../ToggleBtn/ThemeToggleBtn";
import assets from "../../assets/assets";

const Navbar = ({ theme, setTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 15 },
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-3">
                {/* Logo */}
                <img
                    className="w-32 sm:w-40 cursor-pointer"
                    src={theme === "dark" ? assets.logo_dark : assets.logo}
                    alt="Logo"
                />

                {/* Desktop Menu */}
                <ul className="hidden sm:flex items-center gap-8 font-semibold text-gray-700 dark:text-gray-100">
                    <li><a href="#hero" className="hover:text-secondary transition-colors">Home</a></li>
                    <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
                    <li><a href="#our-work" className="hover:text-secondary transition-colors">Our Work</a></li>
                    <li><a href="#contact-us" className="hover:text-secondary transition-colors">Contact</a></li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-3 sm:gap-5">
                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                    <button className="hidden sm:flex btn btn-secondary rounded-full text-lg font-semibold gap-2">
                        <a href="#contact-us">Contact</a>
                        <img src={assets.arrow_icon} width={18} alt="arrow" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="sm:hidden focus:outline-none"
                    >
                        <img
                            src={
                                theme === "dark"
                                    ? assets.menu_icon_dark
                                    : assets.menu_icon
                            }
                            alt="menu"
                            className="w-8"
                        />
                    </button>
                </div>
            </div>

            {/* Sidebar (Animated + Gradient Glow) */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div
                            className={`fixed top-0 right-0 h-full w-64 backdrop-blur-2xl bg-white/30 dark:bg-gray-800/30 flex flex-col items-start px-6 pt-16 z-50 shadow-2xl border-l relative overflow-hidden`}
                            variants={sidebarVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {/* Gradient glow border */}
                            <div className="absolute inset-0 rounded-l-lg border-l border-t border-b border-transparent">
                                <div className="absolute inset-0 border-[2px] border-transparent rounded-l-lg bg-gradient-to-b from-secondary via-primary to-pink-500 opacity-60 blur-md pointer-events-none"></div>
                            </div>

                            {/* Close button */}
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="absolute top-4 right-4 focus:outline-none z-10"
                            >
                                <img src={assets.close_icon} alt="close" className="w-6" />
                            </button>

                            {/* Sidebar Links */}
                            <ul className="flex flex-col gap-6 text-lg font-semibold w-full relative z-10">
                                {["Home", "Services", "Our Work", "Contact"].map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                                            onClick={() => setSidebarOpen(false)}
                                            className="block py-2 px-2 rounded-lg text-gray-900 dark:text-gray-100 hover:text-secondary hover:bg-secondary/10 transition-all"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 relative z-10">
                                <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                            </div>
                        </motion.div>

                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSidebarOpen(false)}
                        ></motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
