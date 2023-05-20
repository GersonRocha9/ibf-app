import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { Feather, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { StatusBar } from 'expo-status-bar'
import IBFLogo from '../src/assets/logo.png'

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

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ScrollView className="flex-1 bg-gray-50 p-5">
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
        <Feather name="calendar" size={24} color="#CC93AD" />
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
        <Ionicons name="reader-outline" size={24} color="#CC93AD" />
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

      <StatusBar style="dark" />
    </ScrollView>
  )
}
