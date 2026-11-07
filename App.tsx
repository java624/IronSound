import React, { useState } from 'react';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import { HomeScreen } from './src/screens/HomeScreen';
import { PlayerScreen } from './src/screens/PlayerScreen';

export default function App() {
  // Локальний стан для перемикання екранів (true — відкритий повний плеєр)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      {isPlayerOpen ? (
        <PlayerScreen onBack={() => setIsPlayerOpen(false)} />
      ) : (
        <HomeScreen onOpenPlayer={() => setIsPlayerOpen(true)} />
      )}
    </TamaguiProvider>
  );
}
