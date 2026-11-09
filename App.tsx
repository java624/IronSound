import { useState } from 'react';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import { PlayerProvider } from './src/store/PlayerStore';
import { HomeScreen } from './src/screens/HomeScreen';
import { PlayerScreen } from './src/screens/PlayerScreen';

export default function App() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      <PlayerProvider>
        {isPlayerOpen ? (
          <PlayerScreen onBack={() => setIsPlayerOpen(false)} />
        ) : (
          <HomeScreen onOpenPlayer={() => setIsPlayerOpen(true)} />
        )}
      </PlayerProvider>
    </TamaguiProvider>
  );
}