import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { MusicStore, MusicProps } from '../data/musicData.mock';

/**
 * ТИМЧАСОВИЙ PlayerStore на React Context для тестування UI.
 * 
 * TODO для Особи 1 (гілка feature/audio-zustand):
 * 1. Перенести цей стор у Zustand: src/store/playerStore.ts
 * 2. Інтегрувати реальне відтворення аудіо через expo-av (Audio.Sound)
 * 3. Цей інтерфейс повністю відповідає потребам UI екранів.
 */

export type Song = MusicProps;

type PlayerContextType = {
  currentSong: Song | null;
  isPlaying: boolean;
  isShuffle: boolean;
  isRepeat: boolean;
  selectSong: (song: Song) => void;
  togglePlay: () => void;
  setIsPlaying: (value: boolean) => void;
  nextSong: () => void;
  prevSong: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  clearSong: () => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(MusicStore[0] ?? null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const selectSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!currentSong && MusicStore.length > 0) {
      setCurrentSong(MusicStore[0]);
      setIsPlaying(true);
      return;
    }
    setIsPlaying((prev) => !prev);
  };

  const nextSong = () => {
    if (!currentSong) {
      if (MusicStore.length > 0) {
        setCurrentSong(MusicStore[0]);
        setIsPlaying(true);
      }
      return;
    }

    if (isShuffle) {
      const otherSongs = MusicStore.filter((s) => s.id !== currentSong.id);
      if (otherSongs.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherSongs.length);
        setCurrentSong(otherSongs[randomIndex]);
      }
    } else {
      const currentIndex = MusicStore.findIndex((s) => s.id === currentSong.id);
      const nextIndex = (currentIndex + 1) % MusicStore.length;
      setCurrentSong(MusicStore[nextIndex]);
    }
    setIsPlaying(true);
  };

  const prevSong = () => {
    if (!currentSong) return;
    const currentIndex = MusicStore.findIndex((s) => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + MusicStore.length) % MusicStore.length;
    setCurrentSong(MusicStore[prevIndex]);
    setIsPlaying(true);
  };

  const toggleShuffle = () => setIsShuffle((prev) => !prev);
  const toggleRepeat = () => setIsRepeat((prev) => !prev);

  const clearSong = () => {
    setCurrentSong(null);
    setIsPlaying(false);
  };

  const value = useMemo(
    () => ({
      currentSong,
      isPlaying,
      isShuffle,
      isRepeat,
      selectSong,
      togglePlay,
      setIsPlaying,
      nextSong,
      prevSong,
      toggleShuffle,
      toggleRepeat,
      clearSong,
    }),
    [currentSong, isPlaying, isShuffle, isRepeat]
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer повинен використовуватися всередині PlayerProvider');
  return ctx;
}
