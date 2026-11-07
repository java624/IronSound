import React from 'react';
import { XStack, YStack, Text, Button, Card } from 'tamagui';

interface TrackCardProps {
  title: string;
  artist: string;
  onPress: () => void;
}

export function TrackCard({ title, artist, onPress }: TrackCardProps) {
  return (
    <Card borderWidth={1} borderColor="$borderColor" backgroundColor="$backgroundPress" padding="$3" borderRadius="$4">
      <XStack alignItems="center" justifyContent="space-between">
        <YStack gap="$1">
          <Text fontSize="$5" fontWeight="600" color="$color">
            {title}
          </Text>
          <Text fontSize="$3" color="$gray10">
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
