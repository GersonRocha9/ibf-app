import { CalendarCheck, Notebook } from 'phosphor-react-native'
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { Link } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import IBFLogo from '../../src/assets/logo.png'

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

export default function Home() {
  const { top, bottom } = useSafeAreaInsets()

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

      {/* Banner do Evento 01 */}
      <View className="bg-gray-200 rounded-lg mt-5 h-40 justify-center items-center">
        <Text className="font-body text-base">Evento Principal</Text>
      </View>

      {/* FlatList na horizontal com próximos eventos */}
      <View className="flex-row items-center gap-1 mt-5">
        <CalendarCheck size={24} color="#CC93AD" weight="bold" />
        <Text className="font-title text-lg text-gray-950">
          Próximos eventos:
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

      <Link href="/map" className="mt-5">
        <Text className="font-title text-gray-950">Ver todos</Text>
      </Link>

      {/* FlatList na horizontal com as pastorais */}
      <View className="flex-row items-center gap-1 mt-5">
        <Notebook size={24} color="#CC93AD" weight="bold" />
        <Text className="font-title text-lg text-gray-950">Pastorais</Text>
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

      <TouchableOpacity className="mt-2">
        <Text className="font-title text-gray-950">Ver todos</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
