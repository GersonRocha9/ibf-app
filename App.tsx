import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <View className="flex-1 items-center justify-center bg-gray-950 p-5">
      <Text className="text-white text-4xl font-title">Hello World</Text>
      <Text className="text-white text-base font-body mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius
        natus eos temporibus debitis perspiciatis quas praesentium consectetur
        vitae voluptatibus laboriosam, delectus repellat numquam illo? Ex, iste
        perferendis? Quisquam, nemo.
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}
