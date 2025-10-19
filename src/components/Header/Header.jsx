import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Banner/Hero";
import Services from "../../Pages/Services";
import TrustedBy from "../../Pages/TrustedBy";
import OurWork from "../../Pages/OurWork";
import Team from "../../Pages/Team";
import ContactUs from "../../Pages/ContactUs";
import { Toaster } from "react-hot-toast";
const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    return (
        <div className="dark:bg-black relative">
            <Toaster></Toaster>
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero></Hero>
            <TrustedBy></TrustedBy>
            <Services></Services>
            <OurWork></OurWork>
            <Team></Team>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Header;
