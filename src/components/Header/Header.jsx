import { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Banner/Hero";
import Services from "../../Pages/Services";
import TrustedBy from "../../Pages/TrustedBy";
import OurWork from "../../Pages/OurWork";
import Team from "../../Pages/Team";
import ContactUs from "../../Pages/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";

const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const position = useRef({ x: 0, y: 0 });
    const requestRef = useRef(null);

    useEffect(() => {
        if ("ontouchstart" in window) return; // disable on touch screens

        const dot = dotRef.current;
        const outline = outlineRef.current;

        // Define colors for themes
        const lightColor = "#a855f7"; // violet-500
        const darkColor = "#22d3ee"; // cyan-400
        const color = theme === "dark" ? darkColor : lightColor;

        // Apply base styles
        if (dot && outline) {
            dot.style.backgroundColor = color;
            outline.style.borderColor = color;
            outline.style.boxShadow = `0 0 10px ${color}80`;
        }

        // Update mouse position instantly
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        // Smooth animation loop
        const animate = () => {
            const speed = 0.15; // smoothness factor
            position.current.x += (mouse.current.x - position.current.x) * speed;
            position.current.y += (mouse.current.y - position.current.y) * speed;

            if (dot) {
                dot.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
            }
            if (outline) {
                outline.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        window.addEventListener("mousemove", handleMouseMove);

        // Hover interaction
        const handleHover = () => {
            if (outline) outline.style.transform += " scale(1.8)";
            if (dot) dot.style.transform += " scale(0.6)";
            if (outline) outline.style.boxShadow = `0 0 25px ${color}`;
        };

        const handleHoverOut = () => {
            if (outline) outline.style.transform = outline.style.transform.replace(" scale(1.8)", "");
            if (dot) dot.style.transform = dot.style.transform.replace(" scale(0.6)", "");
            if (outline) outline.style.boxShadow = `0 0 10px ${color}80`;
        };

        const hoverables = document.querySelectorAll(
            "a, button, input, textarea, select, .hoverable"
        );
        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleHoverOut);
        });

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(requestRef.current);
            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleHoverOut);
            });
        };
    }, [theme]);

    return (
        <div className="dark:bg-black relative overflow-hidden">
            <Toaster />
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero />
            <TrustedBy />
            <Services />
            <OurWork />
            <Team />
            <ContactUs />
            <Footer theme={theme} />

            {/* Custom Cursor */}
            <div
                ref={outlineRef}
                className="hidden md:block fixed top-0 left-0 h-10 w-10 rounded-full border pointer-events-none z-[9999] transition-transform duration-100 ease-out"
                style={{
                    animation: "cursorGlow 2s ease-in-out infinite",
                    "--cursor-color": theme === "dark" ? "#22d3ee" : "#a855f7",
                }}

            ></div>

            <div
                ref={dotRef}
                className="hidden md:block fixed top-0 left-0 h-3 w-3 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
                style={{
                    mixBlendMode: theme === "dark" ? "screen" : "multiply",
                }}
            ></div>
        </div>
    );
};

export default Header;
