import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

export type Song = {
  id: number;
  title: string;
  artist: string;
  duration: number;   // в секундах
  image: string;        
};

type PlayerContextType = {
  currentSong: Song | null;
  isPlaying: boolean;
  selectSong: (song: Song) => void;
  setIsPlaying: (value: boolean) => void;
  clearSong: () => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const value = useMemo(
    () => ({
      currentSong,
      isPlaying,
      selectSong: (song: Song) => {
        setCurrentSong(song);
        setIsPlaying(true);
      },
      setIsPlaying,
      clearSong: () => {
        setCurrentSong(null);
        setIsPlaying(false);
      },
    }),
    [currentSong, isPlaying]
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

// Кастомный хук, чтобы не писать useContext каждый раз
export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer должен использоваться внутри PlayerProvider');
  return ctx;
}