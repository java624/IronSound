import React from 'react';
import { YStack, XStack, Text, ScrollView, Card, Button, Image } from 'tamagui';
import { TrackCard } from '../components/TrackCard';
import { MusicStore } from '../data/musicData.mock';
import { usePlayer } from '../store/PlayerStore';

interface HomeScreenProps {
  onOpenPlayer?: () => void;
}

export function HomeScreen({ onOpenPlayer }: HomeScreenProps) {
  const { currentSong, isPlaying, selectSong, togglePlay } = usePlayer();

  return (
    <YStack flex={1} backgroundColor="$background">
      
      {/* Головний контент зі скролом */}
      <ScrollView flex={1} padding="$4" showsVerticalScrollIndicator={false}>
        {/* Шапка */}
        <XStack justifyContent="space-between" alignItems="center" marginTop="$6" marginBottom="$4">
          <YStack>
            <Text fontSize="$8" fontWeight="bold" color="$color">
              IronSound 🎸
            </Text>
            <Text fontSize="$4" color="$gray11">
              Твій метал-плейлист на сьогодні
            </Text>
          </YStack>
          <Button size="sm" circular variant="quiet">
            ⚙️
          </Button>
        </XStack>

        {/* Секція списку треків */}
        <YStack gap="$3" marginBottom="$24">
          <Text fontSize="$5" fontWeight="600" color="$color" marginBottom="$2">
            Популярні треки ({MusicStore.length})
          </Text>
          
          {MusicStore.map((song) => {
            const isCurrent = currentSong?.id === song.id;
            return (
              <TrackCard 
                key={song.id}
                title={song.title}
                artist={song.artist}
                cover={song.image}
                isActive={isCurrent}
                isPlaying={isPlaying}
                onPress={() => {
                  if (isCurrent) {
                    togglePlay();
                  } else {
                    selectSong(song);
                  }
                  onOpenPlayer?.();
                }}
              />
            );
          })}
        </YStack>
      </ScrollView>

      {/* Закріплений міні-плеєр внизу екрана */}
      {currentSong && (
        <Card 
          position="absolute" 
          bottom={0} 
          left={0} 
          right={0} 
          backgroundColor="$backgroundPress" 
          borderTopWidth={1} 
          borderColor="$borderColor" 
          padding="$3"
          onPress={onOpenPlayer}
          cursor="pointer"
        >
          <XStack alignItems="center" justifyContent="space-between">
            {/* Міні-обкладинка та назва */}
            <XStack alignItems="center" gap="$3" flex={1}>
              <Image
                source={{ uri: currentSong.image }}
                width={46}
                height={46}
                borderRadius="$3"
              />
              <YStack flex={1}>
                <Text fontSize="$4" fontWeight="600" color="$color" numberOfLines={1}>
                  {currentSong.title}
                </Text>
                <Text fontSize="$2" color="$gray10" numberOfLines={1}>
                  {currentSong.artist}
                </Text>
              </YStack>
            </XStack>

            {/* Кнопка швидкого керування у міні-плеєрі */}
            <XStack gap="$2" alignItems="center">
              <Button
                size="sm"
                circular
                backgroundColor="$blue10"
                onPress={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                {isPlaying ? '⏸' : '▶'}
              </Button>
            </XStack>
          </XStack>
        </Card>
      )}

    </YStack>
  );
}
