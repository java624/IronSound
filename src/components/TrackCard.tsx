import React from 'react';
import { XStack, YStack, Text, Button, Card, Image } from 'tamagui';
import { PlayIcon, PauseIcon } from './Icons';

interface TrackCardProps {
  title: string;
  artist: string;
  cover: string;
  duration?: number;
  isActive?: boolean;
  isPlaying?: boolean;
  onPress: () => void;
}

const formatDuration = (totalSec?: number) => {
  if (!totalSec) return '';
  const m = Math.floor(totalSec / 60);
  const s = String(Math.floor(totalSec % 60)).padStart(2, '0');
  return `${m}:${s}`;
};

export function TrackCard({
  title,
  artist,
  cover,
  duration,
  isActive,
  isPlaying,
  onPress,
}: TrackCardProps) {
  return (
    <Card
      borderWidth={1}
      borderColor={isActive ? '#3b82f6' : 'rgba(255, 255, 255, 0.08)'}
      backgroundColor={isActive ? 'rgba(37, 99, 235, 0.12)' : '#151922'}
      paddingHorizontal="$3"
      paddingVertical="$2.5"
      borderRadius="$4"
      onPress={onPress}
      cursor="pointer"
    >
      <XStack alignItems="center" gap="$3">
        {/* Обкладинка треку */}
        <Card
          width={54}
          height={54}
          borderRadius="$3"
          overflow="hidden"
          backgroundColor="#1e2433"
        >
          <Image
            source={{ uri: cover }}
            width={54}
            height={54}
          />
        </Card>

        {/* Назва треку та виконавець */}
        <YStack flex={1} gap="$1">
          <Text
            fontSize="$4"
            fontWeight="700"
            color={isActive ? '#60a5fa' : '$color'}
            numberOfLines={1}
          >
            {title}
          </Text>
          <XStack alignItems="center" gap="$2">
            <Text fontSize="$3" color="$gray10" numberOfLines={1}>
              {artist}
            </Text>
            {duration ? (
              <>
                <Text fontSize="$2" color="$gray8">•</Text>
                <Text fontSize="$2" color="$gray9">{formatDuration(duration)}</Text>
              </>
            ) : null}
          </XStack>
        </YStack>

        {/* Кругла кнопка Play/Pause */}
        <Button
          size="sm"
          circular
          width={40}
          height={40}
          backgroundColor={isActive && isPlaying ? '#2563eb' : 'rgba(255, 255, 255, 0.08)'}
          onPress={(e) => {
            e.stopPropagation();
            onPress();
          }}
        >
          {isActive && isPlaying ? (
            <PauseIcon size={16} color="white" />
          ) : (
            <PlayIcon size={16} color={isActive ? '#60a5fa' : 'white'} />
          )}
        </Button>
      </XStack>
    </Card>
  );
}
