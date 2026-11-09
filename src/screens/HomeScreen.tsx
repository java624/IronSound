import React from 'react';
import { YStack, XStack, Text, ScrollView, Card, Button, Image } from 'tamagui';
import { TrackCard } from '../components/TrackCard';
import { MusicStore } from '../data/musicData.mock';
import { usePlayer } from '../store/PlayerStore';
import { GuitarIcon, SettingsIcon, PlayIcon, PauseIcon, SkipNextIcon } from '../components/Icons';

interface HomeScreenProps {
  onOpenPlayer?: () => void;
}

export function HomeScreen({ onOpenPlayer }: HomeScreenProps) {
  const { currentSong, isPlaying, selectSong, togglePlay, nextSong } = usePlayer();

  return (
    <YStack flex={1} backgroundColor="#0c0e14">
      {/* Головний контент зі скролом */}
      <ScrollView flex={1} paddingHorizontal="$4" showsVerticalScrollIndicator={false}>
        {/* Шапка */}
        <XStack
          justifyContent="space-between"
          alignItems="center"
          marginTop="$7"
          marginBottom="$5"
        >
          <XStack alignItems="center" gap="$3">
            <Card
              width={46}
              height={46}
              borderRadius="$4"
              backgroundColor="#1e2433"
              borderWidth={1}
              borderColor="rgba(59, 130, 246, 0.3)"
              alignItems="center"
              justifyContent="center"
            >
              <GuitarIcon size={26} color="#60a5fa" />
            </Card>
            <YStack>
              <Text fontSize="$7" fontWeight="900" color="white" letterSpacing={0.5}>
                IronSound
              </Text>
              <Text fontSize="$3" color="#94a3b8">
                Твій персональний плейлист
              </Text>
            </YStack>
          </XStack>

          <Button
            size="sm"
            circular
            variant="quiet"
            width={40}
            height={40}
            backgroundColor="rgba(255, 255, 255, 0.06)"
          >
            <SettingsIcon size={20} color="#94a3b8" />
          </Button>
        </XStack>

        {/* Секція списку треків */}
        <YStack gap="$3" marginBottom="$28">
          <XStack justifyContent="space-between" alignItems="center" marginBottom="$1">
            <Text fontSize="$5" fontWeight="800" color="white">
              Популярні треки
            </Text>
            <Text
              fontSize="$2"
              fontWeight="700"
              color="#60a5fa"
              backgroundColor="rgba(37, 99, 235, 0.15)"
              paddingHorizontal="$2.5"
              paddingVertical="$1"
              borderRadius="$3"
            >
              {MusicStore.length} треків
            </Text>
          </XStack>

          {MusicStore.map((song) => {
            const isCurrent = currentSong?.id === song.id;
            return (
              <TrackCard
                key={song.id}
                title={song.title}
                artist={song.artist}
                cover={song.image}
                duration={song.duration}
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

      {/* Плаваючий Mini-Player внизу екрана */}
      {currentSong && (
        <Card
          position="absolute"
          bottom={14}
          left={14}
          right={14}
          backgroundColor="#161b26"
          borderWidth={1}
          borderColor="rgba(255, 255, 255, 0.12)"
          borderRadius="$5"
          padding="$3"
          overflow="hidden"
          onPress={onOpenPlayer}
          cursor="pointer"
        >
          <XStack alignItems="center" justifyContent="space-between">
            {/* Міні-обкладинка та назва */}
            <XStack alignItems="center" gap="$3" flex={1}>
              <Card
                width={48}
                height={48}
                borderRadius="$3"
                overflow="hidden"
                backgroundColor="#1e2433"
              >
                <Image
                  source={{ uri: currentSong.image }}
                  width={48}
                  height={48}
                />
              </Card>

              <YStack flex={1} gap="$0.5">
                <Text fontSize="$4" fontWeight="700" color="white" numberOfLines={1}>
                  {currentSong.title}
                </Text>
                <Text fontSize="$2" color="#94a3b8" numberOfLines={1}>
                  {currentSong.artist}
                </Text>
              </YStack>
            </XStack>

            {/* Кнопки швидкого керування */}
            <XStack gap="$2" alignItems="center">
              <Button
                size="sm"
                circular
                width={42}
                height={42}
                backgroundColor="#2563eb"
                onPress={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
              >
                {isPlaying ? (
                  <PauseIcon size={18} color="white" />
                ) : (
                  <PlayIcon size={18} color="white" />
                )}
              </Button>

              <Button
                size="sm"
                circular
                variant="quiet"
                width={36}
                height={36}
                onPress={(e) => {
                  e.stopPropagation();
                  nextSong();
                }}
              >
                <SkipNextIcon size={18} color="#94a3b8" />
              </Button>
            </XStack>
          </XStack>
        </Card>
      )}
    </YStack>
  );
}
