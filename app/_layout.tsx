import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Routes } from '@routes'
import { SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'

const queryClient = new QueryClient()

export { ErrorBoundary } from 'expo-router'

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  return loaded ? <RootLayoutNav /> : <SplashScreen />
}

function RootLayoutNav() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <Toast />
      <StatusBar style="dark" />
    </QueryClientProvider>
  )
}
