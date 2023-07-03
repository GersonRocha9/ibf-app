import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { InstagramEventResponse, instagramAPI } from '../../src/services'
import { useEffect, useState } from 'react'

import { CalendarCheck } from 'phosphor-react-native'
import { EventCarousel } from '../../src/components'
import IBFLogo from '../../src/assets/logo.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Home() {
  const { top, bottom } = useSafeAreaInsets()
  const [instagramEvents, setInstagramEvents] = useState<
    InstagramEventResponse[]
  >([])
  const [isLoading, setIsLoading] = useState(true)

  async function getEvents() {
    const instagramResponse = await instagramAPI.get('/ig/posts_username/', {
      params: {
        user: 'ibflamboyant',
      },
    })

    setInstagramEvents(
      instagramResponse.data.data.user.edge_owner_to_timeline_media.edges,
    )
    setIsLoading(false)
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <ScrollView
      className="flex-1 bg-gray-50 px-5"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      {/* Logo da IBF */}
      <Image
        source={IBFLogo}
        alt="Logo da Igreja Batista do Flamboyant"
        style={{ resizeMode: 'contain' }}
        className="w-52 h-52 self-center"
      />

      {/* Mensagem de boas vindas */}
      <Text className="text-gray-950 text-2xl font-title text-center">
        Seja bem vindo(a) a Igreja Batista do Flamboyant!
      </Text>

      <View className="flex-row items-center gap-1 mt-5">
        <CalendarCheck size={24} color="#CC93AD" weight="bold" />
        <Text className="font-title text-lg text-gray-950">Em destaque:</Text>
      </View>

      {isLoading ? (
        <View className="flex-1 bg-gray-50 items-center justify-center">
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <>
          <ImageBackground
            source={{
              uri: instagramEvents[0].node.display_url,
            }}
            className="mt-2 rounded-lg overflow-hidden aspect-square w-full"
          />

          <EventCarousel
            data={instagramEvents}
            title="Próximos eventos"
            seeAll
            hasSpotlight
          />
        </>
      )}
    </ScrollView>
  )
}
