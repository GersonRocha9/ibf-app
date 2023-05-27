import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { useEffect, useState } from 'react'

import { CalendarCheck } from 'phosphor-react-native'
import { EventCarousel } from '../../src/components'
import IBFLogo from '../../src/assets/logo.png'
import { sanityAPI } from '../../src/services'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Event {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  date: string
  description: string
  image: {
    _type: string
    asset: {
      _type: string
      _ref: string
    }
  }
  place: string
  title: string
}

export default function Home() {
  const { top, bottom } = useSafeAreaInsets()
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function getEvents() {
    const response = await sanityAPI.get('', {
      params: {
        query: '*[_type == "event"]',
      },
    })

    const eventsOrderByDate = response.data.result.sort(
      (a: Event, b: Event) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)

        return dateB.getTime() - dateA.getTime()
      },
    )

    setEvents(eventsOrderByDate)
    setIsLoading(false)
  }

  const formattedEvents = events.map((event) => {
    const formattedImage = event.image.asset._ref
      .replace('image-', '')
      .replace('-jpg', '.jpg')
      .replace('-png', '.png')

    return {
      ...event,
      image: {
        ...event.image,
        asset: {
          ...event.image.asset,
          _ref: formattedImage,
        },
      },
    }
  })

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
              uri: `https://cdn.sanity.io/images/k1j0zc38/production/${formattedEvents[0]?.image?.asset?._ref}`,
            }}
            className="mt-2 rounded-lg overflow-hidden aspect-square w-full"
          />

          <EventCarousel
            data={formattedEvents}
            title="Próximos eventos"
            seeAll
            hasSpotlight
          />
        </>
      )}
    </ScrollView>
  )
}
