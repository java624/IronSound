import React from 'react';
import { YStack, XStack, Text, ScrollView, Card, Button } from 'tamagui';
import { TrackCard } from '../components/TrackCard';

interface HomeScreenProps {
  onOpenPlayer?: () => void;
}

export function HomeScreen({ onOpenPlayer }: HomeScreenProps) {
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
        <YStack gap="$3" marginBottom="$20">
          <Text fontSize="$5" fontWeight="600" color="$color" marginBottom="$2">
            Популярні треки
          </Text>
          
          {/* Приклади карток (сюди згодом стане плейлист від Саші) */}
          <TrackCard 
            title="Metal Heavyriff" 
            artist="IronSound Band" 
            onPress={() => onOpenPlayer?.()} 
          />
          <TrackCard 
            title="Cyberpunk Night" 
            artist="Synthwave Code" 
            onPress={() => onOpenPlayer?.()} 
          />
          <TrackCard 
            title="Screaming Steel" 
            artist="Dark Voltage" 
            onPress={() => onOpenPlayer?.()} 
          />
        </YStack>
      </ScrollView>

      {/* Закріплений міні-плеєр внизу екрана */}
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
            <Card width={45} height={45} backgroundColor="$blue8" borderRadius="$4" />
            <YStack flex={1}>
              <Text fontSize="$4" fontWeight="600" color="$color" numberOfLines={1}>
                Metal Heavyriff
              </Text>
              <Text fontSize="$2" color="$gray10" numberOfLines={1}>
                IronSound Band
              </Text>
            </YStack>
          </XStack>

          {/* Кнопка швидкого керування у міні-плеєрі */}
          <XStack gap="$2" alignItems="center">
            <Button size="sm" circular backgroundColor="$blue10" onPress={(e) => {
              e.stopPropagation();
              console.log('Mini Play/Pause');
            }}>
              ▶
            </Button>
          </XStack>
        </XStack>
      </Card>

    </YStack>
  );
}
