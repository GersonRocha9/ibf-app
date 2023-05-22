import { Text, View } from 'react-native'

export default function NotFoundScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">404</Text>
      <Text className="text-xl">Página não encontrada</Text>
    </View>
  )
}
