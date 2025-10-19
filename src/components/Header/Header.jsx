import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    return (
        <div className="dark:bg-black relative">
            <Navbar theme={theme} setTheme={setTheme} />
        </div>
    );
};

export default Header;
