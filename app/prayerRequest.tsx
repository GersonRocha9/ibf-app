import 'react-native-url-polyfill/auto'

import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { ENV_SUPABASE_TOKEN, ENV_SUPABASE_URL } from '@env'

import Toast from 'react-native-toast-message'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

const supabase = createClient(ENV_SUPABASE_URL, ENV_SUPABASE_TOKEN)

export default function PrayerRequest() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [prayerRequest, setPrayerRequest] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleCreatePrayerRequest() {
    if (!name || !phone || !prayerRequest) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Por favor, preencha todos os campos!',
      })
      return
    }

    try {
      setIsLoading(true)

      await supabase.from('prayers').insert({
        name,
        phone,
        prayerRequest,
      })

      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Pedido de oração enviado com sucesso! ✅',
        text2: 'Que Deus abençoe sua vida! 🙏🏼',
      })

      setName('')
      setPhone('')
      setPrayerRequest('')
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Ocorreu um erro ao enviar seu pedido de oração!',
        text2: 'Por favor, tente novamente mais tarde.',
      })
    }
  }
  return (
    <View className="bg-gray-50 flex-1 px-5">
      <Text className="text-gray-950 text-base font-title mt-2">
        Preencha o formulário abaixo para enviar seu pedido de oração
      </Text>

      <View className="mt-5 flex flex-col space-y-5">
        <TextInput
          className="border border-gray-300 rounded-lg px-3 py-2 text-lg font-body"
          placeholder="Nome"
          placeholderTextColor="#A0AEC0"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          className="border border-gray-300 rounded-lg px-3 py-2 text-lg font-body"
          placeholder="Telefone"
          placeholderTextColor="#A0AEC0"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          multiline
          className="px-3 py-2 font-body text-lg border border-gray-300 rounded-lg"
          placeholder="Ex: Peço oração pela minha família..."
          placeholderTextColor="#A0AEC0"
          textAlignVertical="top"
          value={prayerRequest}
          onChangeText={setPrayerRequest}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          className="items-center rounded-lg bg-green-900 px-3 py-4"
          onPress={handleCreatePrayerRequest}
          style={{
            opacity: isLoading || !name || !phone || !prayerRequest ? 0.5 : 1,
          }}
        >
          {isLoading ? (
            <ActivityIndicator color="fff" size={18} />
          ) : (
            <Text className="font-title text-lg uppercase text-white">
              Enviar
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}
