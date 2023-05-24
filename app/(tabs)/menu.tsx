import {
  ArrowFatUp,
  Baby,
  CalendarCheck,
  DownloadSimple,
  MapPin,
  MicrophoneStage,
  Notebook,
  Question,
} from 'phosphor-react-native'
import { Text, View } from 'react-native'

import { MenuItem } from '../../src/components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Menu() {
  const { top, bottom } = useSafeAreaInsets()

  return (
    <View
      className="bg-gray-50 flex-1 px-5"
      style={{ paddingBottom: bottom, paddingTop: top }}
    >
      <Text className="text-gray-950 text-xl font-title mt-2">Menu</Text>

      <View className="mt-5">
        <MenuItem
          href="/"
          icon={<CalendarCheck size={20} weight="bold" />}
          text="Eventos"
        />

        <MenuItem
          href="/playlist"
          icon={<MicrophoneStage size={20} weight="bold" />}
          text="Mensagens"
        />

        <MenuItem
          href="/prayerRequest"
          icon={<Question size={20} weight="bold" />}
          text="Pedidos de oração"
        />

        <MenuItem
          href="/babiesPresentation"
          icon={<Baby size={20} weight="bold" />}
          text="Apresentação de bebês"
        />

        <MenuItem
          href="/map"
          icon={<MapPin size={20} weight="bold" />}
          text="Onde estamos?"
        />

        <MenuItem
          href="/ministries"
          icon={<ArrowFatUp size={20} weight="bold" />}
          text="Ministérios"
        />

        <MenuItem
          href="/pastorals"
          icon={<Notebook size={20} weight="bold" />}
          text="Pastorais"
        />

        <MenuItem
          href="/downloads"
          icon={<DownloadSimple size={20} weight="bold" />}
          text="Downloads"
        />
      </View>

      <View className="mt-8">
        <Text className="font-title text-xl">Informações</Text>

        <View className="mt-5">
          <Text className="font-title text-base">
            Igreja Batista do Flamboyant
          </Text>
          <Text className="font-body text-base">
            <Text className="font-title">Endereço: </Text> Rua Caldas Viana, 250
            - Flamboyant
          </Text>
          <Text className="font-body text-base">
            <Text className="font-title">Telefone:</Text> (22) 9 9993-4230
          </Text>
          <Text className="font-body text-base">
            <Text className="font-title">Cultos: </Text>Quarta: 20h - Domingo:
            10h | 18h | 20h
          </Text>
        </View>
      </View>
    </View>
  )
}
