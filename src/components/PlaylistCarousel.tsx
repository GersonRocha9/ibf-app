import { AirplaneTilt, MicrophoneStage } from 'phosphor-react-native'
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface PlaylistCarouselProps {
  title: string
  data: any[]
  hasSpotlight?: boolean
  onPress?: (videoId) => void
}

export function PlaylistCarousel({
  title,
  data,
  hasSpotlight = false,
  onPress,
}: PlaylistCarouselProps) {
  return (
    <>
      <View className="flex-row items-center gap-1 mt-5">
        {hasSpotlight ? (
          <MicrophoneStage size={24} color="#CC93AD" weight="bold" />
        ) : (
          <AirplaneTilt size={24} color="#CC93AD" weight="bold" />
        )}
        <Text className="font-title text-lg text-gray-950">{title}</Text>
      </View>

      <FlatList
        data={hasSpotlight ? data.slice(1) : data}
        keyExtractor={(item) => String(item.video.videoId)}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-2" />}
        className="mt-2"
        renderItem={({ item }) => (
          <ImageBackground
            source={{
              uri: item.video.thumbnails[3].url,
            }}
            className="rounded-lg w-56 overflow-hidden aspect-video"
          >
            <TouchableOpacity
              onPress={() => onPress(item.video.videoId)}
              className="flex-1"
            />
          </ImageBackground>
        )}
      />
    </>
  )
}
