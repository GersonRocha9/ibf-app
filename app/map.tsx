import { Text, View } from 'react-native'

import { Link } from 'expo-router'

export default function Map() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center">
      <Text className="text-white">Map</Text>

      <Link href="/">
        <Text className="text-white font-title text-4xl">Home</Text>
      </Link>
    </View>
  )
}
