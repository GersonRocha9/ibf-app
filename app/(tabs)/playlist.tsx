import { getVideosFromYouTube, handleOpenVideoOnYouTube } from '@services'
import { Crosshair, Play } from 'phosphor-react-native'
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { PlaylistCarousel } from '@components'
import { useQuery } from '@tanstack/react-query'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Playlist() {
  const { top, bottom } = useSafeAreaInsets()

  const { data: missionsVideos, isLoading: missionsLoading } = useQuery({
    queryKey: ['missionsVideos'],
    queryFn: () => getVideosFromYouTube('PLicFu6m57-vBF1InJQGvi3hI_p2YDUOFY'),
  })

  const { data: messagesVideos, isLoading: messagesLoading } = useQuery({
    queryKey: ['messagesVideos'],
    queryFn: () =>
      getVideosFromYouTube('PLicFu6m57-vAKdPUs9NpQxtHt5MobZwIF', true),
  })

  if (missionsLoading || messagesLoading) {
    return (
      <View className="flex-1 bg-gray-50 items-center justify-center">
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }

  return (
    <ScrollView
      className="flex-1 bg-gray-50 px-5"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <Text className="text-gray-950 text-xl font-title mt-2">
        Mensagens 2023
      </Text>

      <ImageBackground
        source={{
          uri: messagesVideos[0]?.video.thumbnails[3].url,
        }}
        className={`mt-5 rounded-lg overflow-hidden aspect-video w-full ${
          messagesVideos[0].video.isLiveNow && 'border-2 border-red-500'
        }`}
      >
        <TouchableOpacity
          onPress={() => {
            handleOpenVideoOnYouTube(messagesVideos[0].video.videoId)
          }}
          className="flex-1 flex-row items-center justify-center"
        >
          <Play size={36} weight="bold" color="#FFF" />
        </TouchableOpacity>
      </ImageBackground>

      {messagesVideos[0].video.isLiveNow && (
        <View className="flex-row items-center justify-center gap-1 mt-1">
          <Crosshair size={18} color="#7f1d1d" weight="bold" />
          <Text className="text-red-900 font-body text-sm uppercase">
            Estamos ao vivo 👆🏼
          </Text>
        </View>
      )}

      <PlaylistCarousel
        title="Mensagens anteriores"
        data={messagesVideos}
        hasSpotlight
        onPress={handleOpenVideoOnYouTube}
      />

      <PlaylistCarousel
        title="Missões"
        data={missionsVideos}
        onPress={handleOpenVideoOnYouTube}
      />
    </ScrollView>
  )
}
