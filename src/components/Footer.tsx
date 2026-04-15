/* Dependencies */
import { motion } from "motion/react";

import Config from "../Config";

/* Footer component */
export default function Footer() {
    return (
        <footer className="bg-background">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 px-6 lg:px-12 py-16">
                <div className="flex flex-col gap-4">
                    <div className="text-xl font-black text-white">{Config.studioName}</div>
                    <p className="uppercase text-sm tracking-widest text-white/40 max-w-sm">
                        © {new Date().getFullYear()} {Config.studioName}. {Config.footer.tagline}
                    </p>
                </div>

                <div className="flex gap-12">
                    {Config.footer.links.map((col) => (
                        <div key={col.heading} className="flex flex-col gap-2">
                            <h5 className="text-primary font-bold text-xs tracking-widest mb-2 uppercase">{col.heading}</h5>
                            {col.items.map((item) => (
                                <a key={item.label} className="uppercase text-sm tracking-widest text-white/40 hover:text-secondary transition-colors" href={item.href}>{item.label}</a>
                            ))}
                        </div>
                    ))}
                </div>

                <div>
                    <a href={Config.footer.careersHref} className="bg-surface-container-high border border-primary text-primary px-8 py-4 font-black uppercase tracking-tighter hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer">
                        {Config.footer.careersLabel}
                    </a>
                </div>
            </div>
            <div className="px-6 lg:px-12 pb-6 flex flex-col md:flex-row justify-between gap-2 text-[10px] tracking-widest text-white/20 uppercase">
                <span>Built by <a href="https://github.com/chteau" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">@Cheeteau</a></span>
                <span>3D model by <a href="http://www.turbosquid.com/Search/Artists/TomaszCGB" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">TomaszCGB</a></span>
            </div>
            <div className="bg-transparent h-2 w-full">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "33%" }}
                    transition={{ duration: .5 }}
                    className="h-full bg-primary"
                />
            </div>
        </footer>
    );
}