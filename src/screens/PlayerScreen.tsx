import React, { useEffect, useState } from 'react';
import { YStack, XStack, Text, Button, Card, Image } from 'tamagui';
import { usePlayer } from '../store/PlayerStore';

interface PlayerScreenProps {
  onBack?: () => void;
}

const formatTime = (totalSec: number) => {
  const m = Math.floor(totalSec / 60);
  const s = String(Math.floor(totalSec % 60)).padStart(2, '0');
  return `${m}:${s}`;
};

export function PlayerScreen({ onBack }: PlayerScreenProps) {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    nextSong,
    prevSong,
    isShuffle,
    toggleShuffle,
    isRepeat,
    toggleRepeat,
  } = usePlayer();

  const [position, setPosition] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Скидання позиції при перемиканні треку
  useEffect(() => {
    setPosition(0);
  }, [currentSong?.id]);

  // Симуляція відтворення часу (поки Особа 1 не підключить expo-av)
  useEffect(() => {
    if (!isPlaying || !currentSong) return;

    const timer = setInterval(() => {
      setPosition((p) => {
        if (p >= currentSong.duration) {
          if (isRepeat) {
            return 0;
          }
          nextSong();
          return 0;
        }
        return p + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, currentSong, isRepeat, nextSong]);

  if (!currentSong) {
    return (
      <YStack flex={1} backgroundColor="$background" alignItems="center" justifyContent="center">
        <Text color="$gray10">Пісню не вибрано</Text>
        <Button marginTop="$4" onPress={onBack}>Назад</Button>
      </YStack>
    );
  }

  const progress =
    currentSong.duration > 0
      ? Math.min(100, (position / currentSong.duration) * 100)
      : 0;

  return (
    <YStack flex={1} backgroundColor="$background" padding="$5" justifyContent="space-between">
      {/* Верхній бар */}
      <XStack justifyContent="space-between" alignItems="center" marginTop="$6">
        <Button size="sm" circular variant="quiet" onPress={onBack}>
          ▼
        </Button>
        <Text fontSize="$4" fontWeight="600" color="$gray11">
          ПЛЕЄР • IRONSOUND
        </Text>
        <Button
          size="sm"
          circular
          variant="quiet"
          onPress={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? '❤️' : '🤍'}
        </Button>
      </XStack>

      {/* Велика обкладинка альбому */}
      <YStack alignItems="center" justifyContent="center" marginVertical="$4">
        <Card
          width={280}
          height={280}
          borderRadius="$9"
          overflow="hidden"
          backgroundColor="$blue4"
          borderWidth={1}
          borderColor="$borderColor"
        >
          <Image
            source={{ uri: currentSong.image }}
            width={280}
            height={280}
          />
        </Card>
      </YStack>

      {/* Інформація про трек */}
      <YStack gap="$1" alignItems="center">
        <Text fontSize="$7" fontWeight="bold" color="$color" textAlign="center" numberOfLines={2}>
          {currentSong.title}
        </Text>
        <Text fontSize="$4" color="$gray10" textAlign="center">
          {currentSong.artist}
        </Text>
      </YStack>

      {/* Смуга прогресу та таймкоди */}
      <YStack gap="$2" width="100%">
        <XStack backgroundColor="$gray6" height={6} borderRadius="$3" width="100%" overflow="hidden">
          <XStack backgroundColor="$blue10" width={`${progress}%`} height="100%" />
        </XStack>
        <XStack justifyContent="space-between">
          <Text fontSize="$2" color="$gray10">{formatTime(position)}</Text>
          <Text fontSize="$2" color="$gray10">{formatTime(currentSong.duration)}</Text>
        </XStack>
      </YStack>

      {/* Панель керування */}
      <XStack justifyContent="space-around" alignItems="center" marginBottom="$6">
        {/* Кнопка Shuffle */}
        <Button
          size="md"
          circular
          variant="quiet"
          backgroundColor={isShuffle ? "$blue4" : undefined}
          onPress={toggleShuffle}
        >
          🔀
        </Button>

        {/* Попередній трек */}
        <Button
          size="lg"
          circular
          variant="quiet"
          onPress={prevSong}
        >
          ⏮
        </Button>

        {/* Головна кнопка Play / Pause */}
        <Button
          size="xl"
          circular
          backgroundColor="$blue10"
          onPress={togglePlay}
        >
          <Text fontSize="$7" color="white">
            {isPlaying ? '⏸' : '▶'}
          </Text>
        </Button>

        {/* Наступний трек */}
        <Button
          size="lg"
          circular
          variant="quiet"
          onPress={nextSong}
        >
          ⏭
        </Button>

        {/* Кнопка Repeat */}
        <Button
          size="md"
          circular
          variant="quiet"
          backgroundColor={isRepeat ? "$blue4" : undefined}
          onPress={toggleRepeat}
        >
          🔁
        </Button>
      </XStack>
    </YStack>
  );
}
