/* Dependencies */
import { useEffect } from "react";

/* App components */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameGrid from "./components/GameGrid";
import About from "./components/About";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import Config from "./Config";

function App() {
    useEffect(() => {
        document.title = Config.studioName;
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <GameGrid />
                <About />
                <Blog />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default App
