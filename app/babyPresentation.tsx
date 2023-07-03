import 'react-native-url-polyfill/auto'

import { FormButton, FormTextInput } from '../src/components'
import { SafeAreaView, Text, View } from 'react-native'

import { babyPresentationSchema } from '../src/schemas/babyPresentationSchema'
import { handleCreateBabyPresentation } from '../src/services'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export type BabyPresentationProps = z.infer<typeof babyPresentationSchema>

export default function BabyPresentation() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BabyPresentationProps>({
    resolver: zodResolver(babyPresentationSchema),
  })

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 px-5">
        <Text className="text-gray-950 text-base font-title mt-2">
          Preencha o formulário abaixo para apresentar seu bebê em nossa Igreja
        </Text>

        <View className="mt-5 flex flex-1 flex-col">
          <FormTextInput
            control={control}
            name="motherName"
            errors={errors.motherName}
            placeholder="Nome da mãe"
          />

          <FormTextInput
            control={control}
            name="fatherName"
            isRequired={false}
            errors={errors.fatherName}
            placeholder="Nome do pai"
          />

          <FormTextInput
            control={control}
            name="phone"
            errors={errors.phone}
            placeholder="Telefone"
          />

          <FormTextInput
            control={control}
            name="babyName"
            errors={errors.babyName}
            placeholder="Nome do bebê"
          />

          <FormTextInput
            control={control}
            name="babyAge"
            errors={errors.babyAge}
            placeholder="Idade do bebê"
          />

          <FormButton
            onPress={handleSubmit((data) =>
              handleCreateBabyPresentation(data, reset, setIsLoading),
            )}
            isLoading={isLoading}
            title="Enviar"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
