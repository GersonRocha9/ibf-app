import 'react-native-url-polyfill/auto'

import { ENV_SUPABASE_TOKEN, ENV_SUPABASE_URL } from '@env'
import { FormButton, FormTextInput } from '../src/components'
import { Text, View } from 'react-native'

import Toast from 'react-native-toast-message'
import { createClient } from '@supabase/supabase-js'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const supabase = createClient(ENV_SUPABASE_URL, ENV_SUPABASE_TOKEN)

const PrayerRequestSchema = z.object({
  name: z.string(),
  phone: z.string(),
  prayerRequest: z.string(),
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
        <FormTextInput
          control={control}
          name="name"
          errors={errors.name}
          placeholder="Nome"
        />

        <FormTextInput
          control={control}
          name="phone"
          errors={errors.phone}
          placeholder="Telefone"
        />

        <FormTextInput
          control={control}
          name="prayerRequest"
          errors={errors.prayerRequest}
          placeholder="Pedido de oração"
          multiline
          numberOfLines={5}
        />

        <FormButton
          isLoading={isLoading}
          onPress={handleSubmit(handleCreatePrayerRequest)}
          title="Enviar"
        />
      </View>
    </View>
  )
}
