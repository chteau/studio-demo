const Config = {
    studioName: "Your Studio Name",
    menuItems: [
        { name: "Games", href: "#games" },
        { name: "Studio", href: "#studio" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
    ],
    discordLink: "https://discord.com/",
    discordLabel: "JOIN DISCORD",

    hero: {
        statusBadge: "System Status: Kinetic",
        headline: {
            main: "Architects of",
            highlight: "Virtual Havoc",
        },
        ctas: [
            { label: "EXPLORE ECOSYSTEM", href: "#games" },
            { label: "VIEW STUDIO SPECS", href: "#studio" },
        ],
        model: {
            /** Edge line color */
            color: "#ffffff",
            /** Line opacity (0–1) */
            opacity: 0.1,
            /** Auto-rotation speed in radians per frame */
            autoRotateSpeed: 0.001,
            /** Max tilt angle in radians driven by mouse position */
            mouseInfluence: 0.1,
            /** Horizontal offset in 3D scene units (positive = right) */
            sceneX: 2.8,
            /** Vertical offset in 3D scene units (positive = up) */
            sceneY: 0,
            /** Model is auto-fitted so its longest axis equals this value in scene units */
            scale: 10,
        },
    },

    about: {
        headline: {
            main: "We build what others",
            highlight: "Fear to Render.",
        },
        description:
            "Your Studio Name is not a factory. We are a boutique collective of architects, engineers, and dreamers dedicated to pushing the boundaries of the Roblox engine. Our games are built on a foundation of structural brutalism and kinetic energy.",
        stats: [
            { value: "2.5B+", label: "Global Engagements" },
            { value: "15", label: "Global Top 100 Hits" },
        ],
        teamImage: "/img/ai-slop-team.png",
    },

    games: [
        {
            title: "NEON DRIFT: OVERDRIVE",
            ccu: "42.8K",
            plays: "1.2B",
            image: "/img/ai-slop-neondrift.png",
            large: true,
        },
        {
            title: "SKYFALL ADVENTURE",
            plays: "15M",
            favs: "8.2K",
            image: "/img/ai-slop-skyfall.png",
        },
        {
            title: "MONOLITH TYCOON",
            rating: "92%",
            favs: "30K",
            image: "/img/ai-slop-monolith.png",
        },
    ],

    blog: [
        { id: "01", date: "OCT 24", title: "DEEP DIVE: OPTIMIZING SHADERS FOR LOW-END DEVICES", tag: "ENGINEERING" },
        { id: "02", date: "OCT 20", title: "NEON DRIFT: HALLOWEEN EVENT PATCH NOTES", tag: "UPDATE" },
        { id: "03", date: "OCT 15", title: "THE PHILOSOPHY: BEYOND THE GRID", tag: "CULTURE" },
    ],

    newsletter: {
        headline: "Sync Up",
        subtitle: "Be the first to hear about new project deployments.",
        placeholder: "INPUT EMAIL ADDR",
        buttonLabel: "ENLIST",
    },

    footer: {
        tagline: "BUILT FOR THE VOID.",
        links: [
            {
                heading: "RESOURCES",
                items: [
                    { label: "TERMS", href: "#" },
                    { label: "PRIVACY", href: "#" },
                ],
            },
            {
                heading: "STUDIO",
                items: [
                    { label: "PARTNERS", href: "#" },
                    { label: "SUPPORT", href: "#" },
                ],
            },
        ],
        careersLabel: "SEE CAREERS",
        careersHref: "#careers",
    },
};

export default Config;
