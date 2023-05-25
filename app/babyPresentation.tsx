import 'react-native-url-polyfill/auto'

import { ENV_SUPABASE_TOKEN, ENV_SUPABASE_URL } from '@env'
import { FormButton, FormDropdownInput, FormTextInput } from '../src/components'
import { SafeAreaView, Text, View } from 'react-native'

import Toast from 'react-native-toast-message'
import { createClient } from '@supabase/supabase-js'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const supabase = createClient(ENV_SUPABASE_URL, ENV_SUPABASE_TOKEN)

const BabyPresentationSchema = z.object({
  motherName: z.string(),
  fatherName: z.string(),
  phone: z.string(),
  babyName: z.string(),
  babyAge: z.string(),
})

type BabyPresentationProps = z.infer<typeof BabyPresentationSchema>

export default function BabyPresentation() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BabyPresentationProps>({
    resolver: zodResolver(BabyPresentationSchema),
  })

  const [worshipOpen, setWorshipOpen] = useState(false)
  const [worshipDate, setWorshipDate] = useState(null)
  const [memberOpen, setMemberOpen] = useState(false)
  const [isMember, setIsMember] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const [worshipItems, setWorshipItems] = useState([
    {
      label: 'Domingo - 10h',
      value: 'sunday10',
    },
    {
      label: 'Domingo - 18h',
      value: 'sunday18',
    },
    {
      label: 'Domingo - 20h',
      value: 'sunday20',
    },
    {
      label: 'Quarta - 20h',
      value: 'wednesday20',
    },
  ])

  const [memberItems, setMemberItems] = useState([
    {
      label: 'Sim',
      value: true,
    },
    {
      label: 'Não',
      value: false,
    },
  ])

  async function handleCreateBabyPresentation(data: BabyPresentationProps) {
    const { motherName, fatherName, phone, babyName, babyAge } = data

    try {
      setIsLoading(true)

      await supabase.from('baby').insert({
        motherName,
        fatherName,
        phone,
        babyName,
        babyAge,
        worshipDate,
        isMember,
      })

      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Solicitação enviada com sucesso! 👶🏼',
        text2: 'Em breve entraremos em contato com você.',
      })

      reset()
      setWorshipDate(null)
      setIsMember(null)

      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Ocorreu um erro ao enviar sua solicitação!',
      })
      setIsLoading(false)
    }
  }

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

          <FormDropdownInput
            open={worshipOpen}
            value={worshipDate}
            items={worshipItems}
            setOpen={setWorshipOpen}
            setValue={setWorshipDate}
            setItems={setWorshipItems}
            placeholder="Selecione uma data"
          />

          <FormDropdownInput
            open={memberOpen}
            value={isMember}
            items={memberItems}
            setOpen={setMemberOpen}
            setValue={setIsMember}
            setItems={setMemberItems}
            placeholder="É membro da IBF?"
          />

          <FormButton
            onPress={handleSubmit(handleCreateBabyPresentation)}
            isLoading={isLoading}
            title="Enviar"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
