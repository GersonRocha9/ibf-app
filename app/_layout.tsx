import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { SplashScreen } from 'expo-router'
import React, { useEffect } from 'react'

import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'
import { Routes } from '../src/routes/Routes'

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
    <>
      <Routes />
      <Toast />
      <StatusBar style="dark" />
    </>
  )
}
