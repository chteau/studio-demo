/* Dependencies */
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Config from "../Config";

/* Blog component */
export default function Blog() {
    return (
        <section id="blog" className="py-24 px-6 lg:px-24">
            <div className="mb-16">
                <h2 className="text-5xl font-black tracking-tighter uppercase">BLOG</h2>
            </div>
            <div className="space-y-4">
                {Config.blog.map((post) => (
                    <motion.div
                        key={post.id}
                        whileHover={{ x: 10 }}
                        className="group bg-surface-container hover:bg-surface-container-high transition-all p-6 flex flex-col md:flex-row justify-between items-center gap-8 cursor-pointer border-l-2 border-transparent hover:border-primary"
                    >
                        <div className="flex items-center gap-8">
                            <span className="text-secondary font-mono text-xs uppercase tracking-widest">{post.id} / {post.date}</span>
                            <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{post.title}</h4>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="bg-surface-container-highest text-[10px] px-3 py-1 font-bold uppercase tracking-widest">{post.tag}</span>
                            <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}