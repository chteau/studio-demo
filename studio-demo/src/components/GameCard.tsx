/* GameCard component */
export default function GameCard({ title, ccu, plays, image, large = false, rating, favs }: any) {
    return (
        <div
            className={`group relative overflow-hidden bg-surface-container ${large ? "md:col-span-8 aspect-video" : "md:col-span-4"}`}
        >
            <img
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-400"
                src={image}
                alt={title}
                referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                    <div>
                        <h4 className={`${large ? "text-4xl" : "text-xl"} font-black uppercase tracking-tighter mb-4`}>{title}</h4>
                        <div className="flex gap-8">
                            {ccu && (
                                <div className="flex flex-col">
                                    <span className="text-secondary text-[10px] tracking-widest uppercase">CCU</span>
                                    <span className="text-2xl font-bold">{ccu}</span>
                                </div>
                            )}
                            {plays && (
                                <div className="flex flex-col">
                                    <span className="text-secondary text-[10px] tracking-widest uppercase">PLAYS</span>
                                    <span className="text-2xl font-bold">{plays}</span>
                                </div>
                            )}
                            {rating && (
                                <div className="flex flex-col">
                                    <span className="text-secondary text-[10px] tracking-widest uppercase">RATING</span>
                                    <span className="text-2xl font-bold">{rating}</span>
                                </div>
                            )}
                            {favs && (
                                <div className="flex flex-col">
                                    <span className="text-secondary text-[10px] tracking-widest uppercase">FAVS</span>
                                    <span className="text-2xl font-bold">{favs}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Play Button */}
                    {large && (
                        <button className="bg-white text-black px-6 py-3 font-bold uppercase text-sm tracking-tightertransition-all duration-150 cursor-pointer hover:scale-95 hover:bg-primary ">
                            PLAY NOW
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}