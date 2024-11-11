import React from 'react'
import { View, Text } from 'react-native'

import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { globalStyles } from '@/global-styles'


const RootLayout = () => {

  //para indicar cuando ya cargamos la fuente ya podemos renderizar los componentes
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>

      <Slot />

      <StatusBar style='light' />
    </View>
  )
}

export default RootLayout

