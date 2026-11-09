export type MusicProps = {
    id: number;
    title: string;
    artist: string;
    image: string;
    duration: number; // Тривалість у секундах
    audioUrl?: string; // TODO (Особа 3): додати прямі mp3 лінки для відтворення
};

export const MusicStore: MusicProps[] = [
    {
        id: 1,
        title: "Night Changes",
        artist: "One Direction",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
        duration: 226,
    },
    {
        id: 2,
        title: "Sweater Weather",
        artist: "The Neighbourhood",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
        duration: 240,
    },
    {
        id: 3,
        title: "After Dark",
        artist: "Mr.Kitty",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80",
        duration: 256,
    },
    {
        id: 4,
        title: "505",
        artist: "Arctic Monkeys",
        image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80",
        duration: 253,
    },
    {
        id: 5,
        title: "The Perfect Girl",
        artist: "Mareux",
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80",
        duration: 196,
    },
    {
        id: 6,
        title: "Little Dark Age",
        artist: "MGMT",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80",
        duration: 300,
    },
    {
        id: 7,
        title: "Reflections",
        artist: "The Neighbourhood",
        image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&q=80",
        duration: 250,
    },
    {
        id: 8,
        title: "Dark Red",
        artist: "Steve Lacy",
        image: "https://images.unsplash.com/photo-1520523839898-50712825e3a7?w=400&q=80",
        duration: 173,
    },
    {
        id: 9,
        title: "Resonance",
        artist: "HOME",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80",
        duration: 212,
    },
    {
        id: 10,
        title: "Space Song",
        artist: "Beach House",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
        duration: 320,
    },
];
