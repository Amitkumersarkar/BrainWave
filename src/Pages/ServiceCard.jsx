import { useState } from "react";

const ServiceCard = ({ service, idx }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl p-[2px] transition-all duration-300"
        >
            {/* Animated gradient border */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, 
                       rgba(59,130,246,0.8), rgba(236,72,153,0.4), transparent 80%)`,
                }}
            ></div>

            {/* Inner content box */}
            <div className="relative rounded-[10px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 flex items-center gap-10 p-8 transition-all duration-300">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img
                        className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
                        src={service.icon}
                        alt=""
                    />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold">{service.title}</h3>
                    <p className="text-sm mt-2">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
