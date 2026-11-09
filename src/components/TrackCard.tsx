import React from 'react';
import { XStack, YStack, Text, Button, Card, Image } from 'tamagui';

interface TrackCardProps {
  title: string;
  artist: string;
  cover: string;
  isActive?: boolean;
  isPlaying?: boolean;
  onPress: () => void;
}

export function TrackCard({ title, artist, cover, isActive, isPlaying, onPress }: TrackCardProps) {
  return (
    <Card
      borderWidth={isActive ? 1.5 : 1}
      borderColor={isActive ? "$blue10" : "$borderColor"}
      backgroundColor={isActive ? "$blue2" : "$backgroundPress"}
      padding="$3"
      borderRadius="$4"
      onPress={onPress}
      cursor="pointer"
    >
      <XStack alignItems="center" gap="$3">
        <Image
          source={{ uri: cover }}
          width={56}
          height={56}
          borderRadius="$3"
        />

        <YStack flex={1} gap="$1">
          <Text
            fontSize="$5"
            fontWeight="600"
            color={isActive ? "$blue10" : "$color"}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text fontSize="$3" color="$gray10" numberOfLines={1}>
            {artist}
          </Text>
        </YStack>

        <Button
          size="sm"
          circular={isActive}
          backgroundColor={isActive ? "$blue10" : undefined}
          onPress={(e) => {
            e.stopPropagation();
            onPress();
          }}
        >
          {isActive && isPlaying ? '⏸' : '▶'}
        </Button>
      </XStack>
    </Card>
  );
}
