import { FlatList, ImageBackground, Text, View } from 'react-native'

import { CalendarCheck } from 'phosphor-react-native'
import { Link } from 'expo-router'

interface EventCarouselProps {
  title: string
  data: any[]
  seeAll?: boolean
  hasSpotlight?: boolean
}

export function EventCarousel({
  title,
  data,
  seeAll = false,
  hasSpotlight = false,
}: EventCarouselProps) {
  return (
    <>
      <View className="flex-row items-center gap-1 mt-5">
        <CalendarCheck size={24} color="#CC93AD" weight="bold" />
        <Text className="font-title text-lg text-gray-950">{title}</Text>
      </View>

      <FlatList
        data={hasSpotlight ? data.slice(1) : data}
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

      {seeAll && (
        <Link href="/map" className="mt-5">
          <Text className="font-title text-gray-950">Ver todos</Text>
        </Link>
      )}
    </>
  )
}
