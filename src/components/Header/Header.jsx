import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    const [theme, setTheme] = useState('light');

    return (
        <div className="dark:bg-black relative">
            <Navbar theme={theme} setThem={setTheme}></Navbar>
        </div>
    );
};

export default Header;