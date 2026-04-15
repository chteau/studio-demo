/* Dependencies */
import { motion } from "motion/react";
import ModelCanvas from "./ModelCanvas";
import Config from "../Config";

/* Hero component */
export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-24 pt-20">
            {/* Dot grid */}
            <div className="absolute inset-0 grid-overlay z-0" />

            {/* Atmospheric glow — subtle purple bloom on the right where the star lives */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 65% 70% at 78% 60%, rgba(214,178,252,0.07) 0%, transparent 70%)",
                }}
            />

            {/* 3D wireframe model */}
            <ModelCanvas />

            <div className="relative z-10 max-w-5xl">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, ease: "easeInOut" }}
                    className="text-secondary font-mono tracking-[0.3em] text-sm mb-4 uppercase"
                >
                    {Config.hero.statusBadge}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-8 uppercase [text-shadow:0px_0px_14px_#000000]"
                >
                    {Config.hero.headline.main} <br />
                    <span className="text-primary italic text-glow">{Config.hero.headline.highlight}</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, ease: "easeInOut" }}
                    className="flex flex-wrap gap-4"
                >
                    <a href={Config.hero.ctas[0].href} className="bg-primary text-on-primary px-10 py-5 font-black text-xl tracking-tighter uppercase glow-hover transition-all duration-300 cursor-pointer hover:-translate-y-2">
                        {Config.hero.ctas[0].label}
                    </a>
                    <a href={Config.hero.ctas[1].href} className="border backdrop-blur-md border-outline-variant text-white px-10 py-5 font-bold text-xl tracking-tighter uppercase hover:bg-surface-container-high transition-all duration-300 cursor-pointer hover:-translate-y-2">
                        {Config.hero.ctas[1].label}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}