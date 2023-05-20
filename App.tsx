import { Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-white text-4xl font-bold">Hello World</Text>
      <StatusBar style="auto" />
    </View>
  )
}
