/* Dependencies */
import { motion } from "motion/react";

import Config from "../Config";

/* About component */
export default function About() {
    return (
        <section id="studio" className="py-32 px-6 lg:px-24 border-y border-outline-variant/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-surface-container-high p-12 relative z-10">
                        <h2 className="text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                            {Config.about.headline.main} <br /> <span className="text-primary italic">{Config.about.headline.highlight}</span>
                        </h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                            {Config.about.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {Config.about.stats.map((stat) => (
                                <div key={stat.label} className="border-l-2 border-primary pl-4 py-2">
                                    <div className="text-2xl font-bold">{stat.value}</div>
                                    <div className="text-[10px] text-secondary tracking-widest uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="h-full"
                >
                    <img
                        className="w-full h-125 object-cover filter contrast-125 saturate-50 grayscale hover:grayscale-0 transition-all duration-500"
                        src={Config.about.teamImage}
                        alt="Studio workspace"
                        referrerPolicy="no-referrer"
                    />
                </motion.div>
            </div>
        </section>
    );
}