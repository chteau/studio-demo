/* Dependencies */
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

import Config from "../Config";

/* Navbar component */
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    // Handle which nav item is active depending on the href (either current path or #id)
    useEffect(() => {
        const updateActive = () => {
            const currentPath = window.location.pathname;
            const currentId = window.location.hash;

            const activeItem = Config.menuItems.find((item) => item.href === currentPath || item.href === currentId);
            if (activeItem) { setActiveIndex(Config.menuItems.indexOf(activeItem));
            } else { setActiveIndex(-1); }
        };

        updateActive();
        window.addEventListener("hashchange", updateActive);
        window.addEventListener("popstate", updateActive); // for back/forward navigation

        return () => {
            window.removeEventListener("hashchange", updateActive);
            window.removeEventListener("popstate", updateActive);
        };
    }, []);

    return (
        <header className="fixed top-0 w-full flex justify-between items-center px-6 lg:px-12 h-20 bg-background/80 backdrop-blur-md border-b border-primary/10 z-100">
            {/* Studio Name */}
            <a href="/" className="text-2xl font-black text-white tracking-tighter">{Config.studioName}</a>

            {/* Menu */}
            <nav className="hidden md:flex gap-8 items-center h-full">
                {Config.menuItems.map((item, index) => (
                    <a key={index} href={item.href} className={`
                        font-bold tracking-tighter uppercase text-sm transition-colors duration-150
                        ${activeIndex === index ? "text-primary border-b-2 border-primary pb-1" : "text-white/60 hover:text-white"}
                    `}>
                        {item.name.toUpperCase()}
                    </a>
                ))}
            </nav>

            {/* Buttons */}
            <div className="flex items-center gap-4">
                {/* Discord Button */}
                {Config.discordLink && (
                    <motion.a href={Config.discordLink} className="hidden sm:block bg-primary text-on-primary px-6 py-2 font-bold uppercase tracking-tighter text-sm hover:bg-primary/80 transition-all active:scale-95 cursor-pointer" target="_blank" rel="noopener noreferrer">
                        {Config.discordLabel}
                    </motion.a>
                )}

                {/* Responsive Hamburger Menu */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-0 w-full bg-background border-b border-primary/20 p-6 flex flex-col gap-4 md:hidden"
                >
                    {Config.menuItems.map((item, index) => (
                        <a key={index} href={item.href} className={`
                            font-bold tracking-tighter uppercase text-sm transition-colors duration-150
                            ${activeIndex === index ? "text-primary border-b-2 border-primary pb-1" : "text-white/60 hover:text-white"}
                        `}>
                            {item.name.toUpperCase()}
                        </a>
                    ))}

                    {/* Discord Button */}
                    {Config.discordLink && (
                        <motion.a href={Config.discordLink} className="bg-primary text-on-primary px-6 py-3 font-bold uppercase tracking-tighter text-sm" target="_blank" rel="noopener noreferrer">
                            {Config.discordLabel}
                        </motion.a>
                    )}
                </motion.div>
            )}
        </header>
    );
}