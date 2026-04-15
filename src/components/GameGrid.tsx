/* Components */
import GameCard from "./GameCard";
import Config from "../Config";

/* GameGrid component */
export default function GameGrid() {
    const featured = Config.games.find((g) => g.large);
    const rest = Config.games.filter((g) => !g.large);

    return (
        <section id="games" className="py-24 px-6 lg:px-24 bg-surface-container-low">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="text-secondary font-mono text-sm tracking-widest uppercase mb-2">// ACTIVE_PROJECTS</h2>
                    <h3 className="text-5xl font-black tracking-tighter uppercase">GAME SELECTIONS</h3>
                </div>
                <a className="text-primary hover:underline font-bold uppercase tracking-widest text-sm" href="#">See All &gt;</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
                {featured && <GameCard {...featured} />}
                {rest.length > 0 && (
                    <div className="md:col-span-4 grid grid-rows-2 gap-1">
                        {rest.map((game) => (
                            <GameCard key={game.title} {...game} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}