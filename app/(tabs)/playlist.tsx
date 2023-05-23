import { AirplaneTilt, MicrophoneStage } from 'phosphor-react-native'
import { FlatList, ImageBackground, ScrollView, Text, View } from 'react-native'
import { useEffect, useState } from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { youtubeAPI } from '../../src/services'

interface VideoPlayList {
  index: number
  type: string
  video: {
    videoId: string
    title: string
    thumbnails: {
      videoId: string
      url: string
      title: string
      height: number
      width: number
    }
    lengthSeconds: number
    isLiveNow: boolean
    author: {
      canonicalBaseUrl: string
      channelId: string
      title: string
    }
  }
}

export default function Playlist() {
  const { top, bottom } = useSafeAreaInsets()
  const [missionsVideos, setMissionsVideos] = useState<VideoPlayList[]>([])
  const [messagesVideos, setMessagesVideos] = useState<VideoPlayList[]>([])

  async function getMessageVideos() {
    const response = await youtubeAPI.get('/playlist/videos/', {
      params: {
        id: 'PLicFu6m57-vAKdPUs9NpQxtHt5MobZwIF',
        hl: 'pt',
        gl: 'BR',
      },
    })

    const orderByReverse = response.data.contents.reverse()

    setMessagesVideos(orderByReverse)
  }

  async function getMissionsVideos() {
    const response = await youtubeAPI.get('/playlist/videos/', {
      params: {
        id: 'PLicFu6m57-vBF1InJQGvi3hI_p2YDUOFY',
        hl: 'pt',
        gl: 'BR',
      },
    })

    setMissionsVideos(response.data.contents)
  }

  useEffect(() => {
    getMissionsVideos()
    getMessageVideos()
  }, [])

  return (
    <ScrollView
      className="flex-1 bg-gray-50 px-5"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <Text className="text-gray-950 text-xl font-title mt-2">
        Mensagens 2023
      </Text>

      {/* Banner do Evento 01 */}
      <ImageBackground
        source={{
          uri: messagesVideos[0]?.video.thumbnails[3].url,
        }}
        className="mt-5 h-40 rounded-lg overflow-hidden"
      />

      {/* FlatList na horizontal com as últimas mensagens */}
      <View className="flex-row items-center gap-1 mt-5">
        <MicrophoneStage size={24} color="#CC93AD" weight="bold" />
        <Text className="font-title text-lg text-gray-950">
          Mensagens anteriores:
        </Text>
      </View>

      <FlatList
        data={messagesVideos}
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
            className="rounded-lg w-40 h-40 overflow-hidden"
          />
        )}
      />

      {/* FlatList na horizontal com as missões */}
      <View className="flex-row items-center gap-1 mt-5">
        <AirplaneTilt size={24} color="#CC93AD" weight="bold" />
        <Text className="font-title text-lg text-gray-950">Missões</Text>
      </View>

      <FlatList
        data={missionsVideos}
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
            className="rounded-lg w-40 h-40 overflow-hidden"
          />
        )}
      />
    </ScrollView>
  )
}
