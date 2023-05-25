import 'react-native-url-polyfill/auto'

import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { ENV_SUPABASE_TOKEN, ENV_SUPABASE_URL } from '@env'

import Toast from 'react-native-toast-message'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const supabase = createClient(ENV_SUPABASE_URL, ENV_SUPABASE_TOKEN)

const PrayerRequestSchema = z.object({
  name: z.string().nonempty({
    message: 'Por favor, preencha seu nome',
  }),
  phone: z.string().nonempty({
    message: 'Por favor, preencha seu telefone',
  }),
  prayerRequest: z.string().nonempty({
    message: 'Por favor, preencha seu pedido de oração',
  }),
})

type PrayerRequestProps = z.infer<typeof PrayerRequestSchema>

export default function PrayerRequest() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PrayerRequestProps>({
    resolver: zodResolver(PrayerRequestSchema),
  })

  async function handleCreatePrayerRequest(data: PrayerRequestProps) {
    try {
      setIsLoading(true)

      await supabase.from('prayers').insert({
        name: data.name,
        phone: data.phone,
        prayerRequest: data.prayerRequest,
      })

      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Pedido de oração enviado com sucesso! ✅',
        text2: 'Que Deus abençoe sua vida! 🙏🏼',
      })

      reset()
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

      <View className="mt-5 flex flex-col">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className={`border ${
                errors?.name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg px-3 py-2 text-lg font-body mb-4`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nome"
              placeholderTextColor="#A0AEC0"
            />
          )}
          name="name"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className={`border ${
                errors?.phone ? 'border-red-500' : 'border-gray-300'
              } rounded-lg px-3 py-2 text-lg font-body mb-4`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Telefone"
              placeholderTextColor="#A0AEC0"
            />
          )}
          name="phone"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              className={`border ${
                errors?.prayerRequest ? 'border-red-500' : 'border-gray-300'
              } rounded-lg px-3 py-2 text-lg font-body mb-4`}
              placeholder="Ex: Peço oração pela minha família..."
              placeholderTextColor="#A0AEC0"
              textAlignVertical="top"
              numberOfLines={5}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="prayerRequest"
        />

        <TouchableOpacity
          activeOpacity={0.7}
          className="items-center rounded-lg bg-green-900 px-3 py-4"
          onPress={handleSubmit(handleCreatePrayerRequest)}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" size={18} />
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
