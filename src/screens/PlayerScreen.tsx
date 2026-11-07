import React, { useState } from 'react';
import { YStack, XStack, Text, Button, Card, Circle } from 'tamagui';

interface PlayerScreenProps {
  onBack?: () => void;
}

export function PlayerScreen({ onBack }: PlayerScreenProps) {
  // Локальний стейт для UI (поки чекаємо Zustand від Саші)
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35); // у відсотках або секундах

  return (
    <YStack flex={1} backgroundColor="$background" padding="$5" justifyContent="space-between">
      
      {/* Верхній бар: Кнопка назад / Назва екрана */}
      <XStack justifyContent="space-between" alignItems="center" marginTop="$6">
        <Button size="sm" circular variant="quiet" onPress={onBack}>
          ▼
        </Button>
        <Text fontSize="$4" fontWeight="600" color="$gray11">
          ПЛЕЄР • IRONSOUND
        </Text>
        <Button size="sm" circular variant="quiet">
          ❤️
        </Button>
      </XStack>

      {/* Центральна частина: Велика обкладинка треку */}
      <YStack alignItems="center" justifyContent="center" marginVertical="$4">
        <Card width={280} height={280} borderRadius="$9" backgroundColor="$blue4" overflow="hidden" alignItems="center" justifyContent="center">
          {/* Візуальний арт / іконка альбому */}
          <Circle size={100} backgroundColor="$blue8" opacity={0.6} />
          <Text position="absolute" fontSize="$9">🎸</Text>
        </Card>
      </YStack>

      {/* Інформація про трек та виконавець */}
      <YStack gap="$1" alignItems="center">
        <Text fontSize="$7" fontWeight="bold" color="$color" textAlign="center">
          Metal Heavyriff
        </Text>
        <Text fontSize="$4" color="$gray10" textAlign="center">
          IronSound Band
        </Text>
      </YStack>

      {/* Блок прогресу (Слайдер треку та таймкоди) */}
      <YStack gap="$2" width="100%">
        {/* Лінія прогресу */}
        <XStack backgroundColor="$gray6" height={6} borderRadius="$3" width="100%" overflow="hidden">
          <XStack backgroundColor="$blue10" width={`${progress}%`} height="100%" />
        </XStack>

        <XStack justifyContent="space-between">
          <Text fontSize="$2" color="$gray10">01:23</Text>
          <Text fontSize="$2" color="$gray10">03:45</Text>
        </XStack>
      </YStack>

      {/* Головна панель керування (Кнопки) */}
      <XStack justifyContent="space-around" alignItems="center" marginBottom="$6">
        <Button size="md" circular variant="quiet" fontSize="$5">
          🔀
        </Button>
        <Button size="lg" circular variant="quiet" fontSize="$6" onPress={() => console.log('Prev')}>
          ⏮
        </Button>
        
        {/* Велика центральна кнопка Play/Pause */}
        <Button 
          size="xl" 
          circular 
          backgroundColor="$blue10" 
          onPress={() => setIsPlaying(!isPlaying)}
        >
          <Text fontSize="$7" color="white">
            {isPlaying ? '⏸' : '▶'}
          </Text>
        </Button>

        <Button size="lg" circular variant="quiet" fontSize="$6" onPress={() => console.log('Next')}>
          ⏭
        </Button>
        <Button size="md" circular variant="quiet" fontSize="$5">
          🔁
        </Button>
      </XStack>

    </YStack>
  );
}
