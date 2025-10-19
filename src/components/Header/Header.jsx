import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Banner/Hero";

const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    return (
        <div className="dark:bg-black relative">
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero></Hero>
        </div>
    );
};

export default Header;
