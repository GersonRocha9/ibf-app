import { Text, View } from 'react-native'

export default function NotFoundScreen() {
  return (
    <View className="bg-gray-50 flex-1 justify-center items-center px-5">
      <Text className="text-gray-950 text-base text-center font-title mt-2">
        Página não encontrada
      </Text>
    </View>
  )
}
