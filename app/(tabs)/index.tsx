import { CalendarCheck, Notebook } from 'phosphor-react-native'
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useEffect, useState } from 'react'

import IBFLogo from '../../src/assets/logo.png'
import { Link } from 'expo-router'
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

const mockedPastorals = [
  {
    id: 1,
    title: 'Pastoral 01',
  },
  {
    id: 2,
    title: 'Pastoral 02',
  },
  {
    id: 3,
    title: 'Pastoral 03',
  },
]

export default function Home() {
  const { top, bottom } = useSafeAreaInsets()
  const [events, setEvents] = useState<Event[]>([])

  async function getEvents() {
    const response = await sanityAPI.get('')

    const eventsOrderByDate = response.data.result.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      return dateB.getTime() - dateA.getTime()
    })

    setEvents(eventsOrderByDate)
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

      {/* Banner do Evento Principal */}
      <ImageBackground
        source={{
          uri: `https://cdn.sanity.io/images/k1j0zc38/production/${formattedEvents[0]?.image?.asset?._ref}`,
        }}
        className="mt-5 h-40 rounded-lg overflow-hidden"
      />

      {/* FlatList na horizontal com próximos eventos */}
      <View className="flex-row items-center gap-1 mt-5">
        <CalendarCheck size={24} color="#CC93AD" weight="bold" />
        <Text className="font-title text-lg text-gray-950">
          Próximos eventos:
        </Text>
      </View>

      <FlatList
        data={formattedEvents}
        keyExtractor={(event) => String(event._id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-2" />}
        renderItem={({ item: event }) => (
          <ImageBackground
            source={{
              uri: `https://cdn.sanity.io/images/k1j0zc38/production/${event?.image?.asset?._ref}`,
            }}
            className="rounded-lg w-40 h-40 overflow-hidden"
          />
        )}
        className="mt-2"
      />

      <Link href="/map" className="mt-5">
        <Text className="font-title text-gray-950">Ver todos</Text>
      </Link>

      {/* FlatList na horizontal com as pastorais */}
      <View className="flex-row items-center gap-1 mt-5">
        <Notebook size={24} color="#CC93AD" weight="bold" />
        <Text className="font-title text-lg text-gray-950">Pastorais</Text>
      </View>

      <FlatList
        data={mockedPastorals}
        keyExtractor={(item) => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-2" />}
        renderItem={({ item }) => (
          <View className="bg-gray-200 rounded-lg mt-2 w-40 h-40 justify-center items-center">
            <Text className="font-body text-base">{item.title}</Text>
          </View>
        )}
      />

      <TouchableOpacity className="mt-2">
        <Text className="font-title text-gray-950">Ver todos</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
