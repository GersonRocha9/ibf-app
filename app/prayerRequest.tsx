import 'react-native-url-polyfill/auto'

import { FormButton, FormTextInput } from '../src/components'
import { Text, View } from 'react-native'

import { PrayerRequestSchema } from '../src/schemas'
import { handleCreatePrayerRequest } from '../src/services'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export type PrayerRequestProps = z.infer<typeof PrayerRequestSchema>

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
          textAlignVertical="top"
        />

        <FormButton
          isLoading={isLoading}
          onPress={handleSubmit((data) =>
            handleCreatePrayerRequest(data, reset, setIsLoading),
          )}
          title="Enviar"
        />
      </View>
    </View>
  )
}
