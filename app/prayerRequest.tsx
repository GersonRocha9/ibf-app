import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import Toast from 'react-native-toast-message'

export default function PrayerRequest() {
  function handleCreatePrayerRequest() {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Pedido de oração enviado com sucesso! ✅',
      text2: 'Que Deus abençoe sua vida! 🙏🏼',
    })
  }
  return (
    <View className="bg-gray-50 flex-1 px-5">
      <Text className="text-gray-950 text-base font-title mt-2">
        Preencha o formulário abaixo para enviar seu pedido de oração
      </Text>

      <View className="mt-5 flex flex-col space-y-5">
        <TextInput
          className="border border-gray-300 rounded-lg p-4 text-lg font-body"
          placeholder="Nome"
          placeholderTextColor="#A0AEC0"
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-4 text-lg font-body"
          placeholder="Telefone"
          placeholderTextColor="#A0AEC0"
        />

        <TextInput
          multiline
          className="p-4 font-body text-lg border border-gray-300 rounded-lg"
          placeholder="Ex: Peço oração pela minha família..."
          placeholderTextColor="#A0AEC0"
          textAlignVertical="top"
        />

        <TouchableOpacity
          activeOpacity={0.7}
          className="items-center rounded-lg bg-green-900 py-5"
          onPress={handleCreatePrayerRequest}
        >
          <Text className="font-title text-lg uppercase text-white">
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
