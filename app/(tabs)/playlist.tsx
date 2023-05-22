import { AirplaneTilt, MicrophoneStage } from 'phosphor-react-native'
import { FlatList, ScrollView, Text, View } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

const mockedEvents = [
  {
    id: 1,
    title: 'Evento 01',
  },
  {
    id: 2,
    title: 'Evento 02',
  },
  {
    id: 3,
    title: 'Evento 03',
  },
]

export default function Playlist() {
  const { top, bottom } = useSafeAreaInsets()

  return (
    <ScrollView
      className="flex-1 bg-gray-50 px-5"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <Text className="text-gray-950 text-xl font-title mt-2">
        Mensagens 2023
      </Text>

      {/* Banner do Evento 01 */}
      <View className="bg-gray-200 rounded-lg mt-5 h-40 justify-center items-center">
        <Text className="font-body text-base">Última mensagem</Text>
      </View>

      {/* FlatList na horizontal com as últimas mensagens */}
      <View className="flex-row items-center gap-1 mt-5">
        <MicrophoneStage size={24} color="#CC93AD" weight="bold" />
        <Text className="font-title text-lg text-gray-950">
          Mensagens anteriores:
        </Text>
      </View>

      <FlatList
        data={mockedEvents}
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

      {/* FlatList na horizontal com as missões */}
      <View className="flex-row items-center gap-1 mt-5">
        <AirplaneTilt size={24} color="#CC93AD" weight="bold" />
        <Text className="font-title text-lg text-gray-950">Missões</Text>
      </View>

      <FlatList
        data={mockedEvents}
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
    </ScrollView>
  )
}
