/* Dependencies */
import Config from "../Config";

/* Newsletter component */
export default function Newsletter() {
    return (
        <section className="py-24 px-6 lg:px-24 bg-primary text-on-primary">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <h2 className="text-6xl font-black tracking-tighter uppercase leading-none mb-4">{Config.newsletter.headline}</h2>
                    <p className="font-bold uppercase tracking-widest opacity-80">{Config.newsletter.subtitle}</p>
                </div>
                <div className="lg:w-1/2 w-full">
                    <form className="flex flex-col md:flex-row gap-0" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="grow bg-on-primary/10 border-0 border-b-2 border-on-primary p-6 text-xl placeholder:text-on-primary/40 focus:ring-0 focus:border-black/20 transition-all uppercase font-bold outline-none"
                            placeholder={Config.newsletter.placeholder}
                            type="email"
                        />
                        <button className="bg-on-primary text-primary px-12 py-6 font-black text-xl tracking-tighter uppercase hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                            {Config.newsletter.buttonLabel}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}