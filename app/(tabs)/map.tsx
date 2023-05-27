import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Text, View } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Map() {
  const { top, bottom } = useSafeAreaInsets()
  const latitude = -21.767511293640347
  const longitude = -41.3061041505967

  return (
    <View
      className="bg-gray-50 flex-1 px-5"
      style={{ paddingBottom: bottom, paddingTop: top }}
    >
      <Text className="text-gray-950 text-xl font-title mt-2">
        Onde estamos?
      </Text>

      <Text className="text-gray-950 text-sm font-body mt-5">
        Estamos localizados na Rua Caldas Viana, 250 - Campos dos Goytacazes -
        Rio de Janeiro
      </Text>

      <MapView
        className="w-full h-96 mt-5"
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title="Igreja Batista do Flamboyant"
          description="Um lugar de paz e comunhão em Jesus Cristo."
        />
      </MapView>

      <Text className="text-gray-950 text-xl font-title text-center mt-5">
        Venha nos fazer uma visita!
      </Text>

      <Text className="text-gray-950 text-sm font-body mt-5">
        Cultos presenciais: Domingos às 10h, 18h e 20h | Quartas às 20h
      </Text>
    </View>
  )
}
