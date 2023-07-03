import { Stack } from 'expo-router'

export function Routes() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontFamily: 'Poppins_700Bold',
        },
      }}
      initialRouteName="(tabs)"
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="downloads"
        options={{
          title: 'Downloads',
        }}
      />

      <Stack.Screen
        name="babyPresentation"
        options={{
          title: 'Apresentação de bebês',
        }}
      />

      <Stack.Screen
        name="prayerRequest"
        options={{
          title: 'Pedidos de oração',
        }}
      />

      <Stack.Screen
        name="[...missing]"
        options={{
          title: 'Em breve 🔒',
        }}
      />
    </Stack>
  )
}
