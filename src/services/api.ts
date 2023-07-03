import { BabyPresentationProps } from '../../app/babyPresentation'
import { PrayerRequestProps } from '../../app/prayerRequest'
import Toast from 'react-native-toast-message'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://app-crud.onrender.com',
})

export async function handleCreatePrayerRequest(
  data: PrayerRequestProps,
  reset: () => void,
  setIsLoading: (value: boolean) => void,
) {
  const { name, phone, prayerRequest } = data

  try {
    setIsLoading(true)

    await api.post('/oracao', {
      nome: name,
      telefone: phone,
      descricao: prayerRequest,
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

export async function handleCreateBabyPresentation(
  data: BabyPresentationProps,
  reset: () => void,
  setIsLoading: (value: boolean) => void,
) {
  const { motherName, fatherName, phone, babyName, babyAge } = data

  try {
    setIsLoading(true)

    await api.post('/apresentacao', {
      nomedaMae: motherName,
      nomeDoPai: fatherName,
      telefone: phone,
      nomeDoBebe: babyName,
      dataDeNascimento: babyAge,
    })

    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Solicitação enviada com sucesso! 👶🏼',
      text2: 'Em breve entraremos em contato com você.',
    })

    reset()

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
