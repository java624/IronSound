import React, { useEffect, useState } from 'react';
import { YStack, XStack, Text, Button, Card, Image, Slider } from 'tamagui';
import { usePlayer } from '../store/PlayerStore';
import {
  ChevronDownIcon,
  HeartIcon,
  ShuffleIcon,
  RepeatIcon,
  SkipPrevIcon,
  SkipNextIcon,
  PlayIcon,
  PauseIcon,
  VolumeIcon,
} from '../components/Icons';

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
      <YStack flex={1} backgroundColor="#0c0e14" alignItems="center" justifyContent="center">
        <Text color="#94a3b8">Пісню не вибрано</Text>
        <Button marginTop="$4" onPress={onBack}>Назад</Button>
      </YStack>
    );
  }

  return (
    <YStack flex={1} backgroundColor="#0c0e14" paddingHorizontal="$5" paddingVertical="$6" justifyContent="space-between">
      {/* Верхній бар */}
      <XStack justifyContent="space-between" alignItems="center" marginTop="$6">
        <Button
          size="sm"
          circular
          variant="quiet"
          width={42}
          height={42}
          backgroundColor="rgba(255, 255, 255, 0.06)"
          onPress={onBack}
        >
          <ChevronDownIcon size={22} color="white" />
        </Button>

        <YStack alignItems="center">
          <Text fontSize="$2" fontWeight="700" color="#60a5fa" letterSpacing={2}>
            ЗАРАЗ ГРАЄ
          </Text>
          <Text fontSize="$3" fontWeight="600" color="#94a3b8">
            IronSound
          </Text>
        </YStack>

        <Button
          size="sm"
          circular
          variant="quiet"
          width={42}
          height={42}
          backgroundColor="rgba(255, 255, 255, 0.06)"
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <HeartIcon
            size={22}
            color={isFavorite ? '#ef4444' : '#94a3b8'}
            fill={isFavorite ? '#ef4444' : 'none'}
          />
        </Button>
      </XStack>

      {/* Велика обкладинка альбому */}
      <YStack alignItems="center" justifyContent="center" marginVertical="$4">
        <Card
          width={290}
          height={290}
          borderRadius="$6"
          overflow="hidden"
          backgroundColor="#1e2433"
          borderWidth={1}
          borderColor="rgba(255, 255, 255, 0.12)"
        >
          <Image
            source={{ uri: currentSong.image }}
            width={290}
            height={290}
          />
        </Card>
      </YStack>

      {/* Інформація про трек */}
      <YStack gap="$1.5" alignItems="center">
        <Text fontSize="$7" fontWeight="800" color="white" textAlign="center" numberOfLines={2}>
          {currentSong.title}
        </Text>
        <Text fontSize="$4" fontWeight="600" color="#94a3b8" textAlign="center">
          {currentSong.artist}
        </Text>
      </YStack>

      {/* Інтерактивний Слайдер прогресу та перемотування */}
      <YStack gap="$2" width="100%">
        <Slider
          value={[position]}
          max={currentSong.duration}
          step={1}
          onValueChange={([val]) => setPosition(val)}
          width="100%"
        >
          <Slider.Track height={6} backgroundColor="rgba(255, 255, 255, 0.1)" borderRadius="$3">
            <Slider.TrackActive backgroundColor="#2563eb" />
          </Slider.Track>
          <Slider.Thumb index={0} circular size="$1" backgroundColor="white" />
        </Slider>

        <XStack justifyContent="space-between">
          <Text fontSize="$2" fontWeight="600" color="#94a3b8">{formatTime(position)}</Text>
          <Text fontSize="$2" fontWeight="600" color="#94a3b8">{formatTime(currentSong.duration)}</Text>
        </XStack>
      </YStack>

      {/* Панель керування відтворенням */}
      <XStack justifyContent="space-around" alignItems="center" marginBottom="$3">
        {/* Shuffle */}
        <Button
          size="md"
          circular
          variant="quiet"
          width={46}
          height={46}
          backgroundColor={isShuffle ? 'rgba(37, 99, 235, 0.2)' : 'transparent'}
          onPress={toggleShuffle}
        >
          <ShuffleIcon size={22} color={isShuffle ? '#60a5fa' : '#94a3b8'} />
        </Button>

        {/* Previous */}
        <Button
          size="lg"
          circular
          variant="quiet"
          width={52}
          height={52}
          onPress={prevSong}
        >
          <SkipPrevIcon size={26} color="white" />
        </Button>

        {/* Play / Pause - головна кнопка */}
        <Button
          size="xl"
          circular
          width={70}
          height={70}
          backgroundColor="#2563eb"
          onPress={togglePlay}
        >
          {isPlaying ? (
            <PauseIcon size={30} color="white" />
          ) : (
            <PlayIcon size={30} color="white" />
          )}
        </Button>

        {/* Next */}
        <Button
          size="lg"
          circular
          variant="quiet"
          width={52}
          height={52}
          onPress={nextSong}
        >
          <SkipNextIcon size={26} color="white" />
        </Button>

        {/* Repeat */}
        <Button
          size="md"
          circular
          variant="quiet"
          width={46}
          height={46}
          backgroundColor={isRepeat ? 'rgba(37, 99, 235, 0.2)' : 'transparent'}
          onPress={toggleRepeat}
        >
          <RepeatIcon size={22} color={isRepeat ? '#60a5fa' : '#94a3b8'} />
        </Button>
      </XStack>

      {/* Нижня панель гучності (естетичний слайдер) */}
      <XStack alignItems="center" gap="$3" paddingHorizontal="$4" marginBottom="$2">
        <VolumeIcon size={18} color="#64748b" />
        <XStack flex={1} backgroundColor="rgba(255, 255, 255, 0.08)" height={4} borderRadius="$2" overflow="hidden">
          <XStack backgroundColor="#64748b" width="70%" height="100%" />
        </XStack>
      </XStack>
    </YStack>
  );
}
