import React from 'react';
import { XStack, YStack, Text, Button, Card, Image } from 'tamagui';

interface TrackCardProps {
  title: string;
  artist: string;
  cover: string;        // URL картинки
  onPress: () => void;
}

export function TrackCard({ title, artist, cover, onPress }: TrackCardProps) {
  return (
    <Card
      borderWidth={1}
      borderColor="$borderColor"
      backgroundColor="$backgroundPress"
      padding="$3"
      borderRadius="$4"
    >
      <XStack alignItems="center" gap="$3">
        <Image
          source={{ uri: cover }}
          width={56}
          height={56}
          borderRadius="$3"
        />

        <YStack flex={1} gap="$1">
          <Text fontSize="$5" fontWeight="600" color="$color" numberOfLines={1}>
            {title}
          </Text>
          <Text fontSize="$3" color="$gray10" numberOfLines={1}>
            {artist}
          </Text>
        </YStack>

        <Button size="sm" onPress={onPress}>
          ▶ Play
        </Button>
      </XStack>
    </Card>
  );
}