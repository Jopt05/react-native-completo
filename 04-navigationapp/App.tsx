import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigatior/StackNavigator';
import { MenuLateralBasico } from './src/navigatior/MenuLateralBasico';
import { MenuLateral } from './src/navigatior/MenuLateral';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuLateral />
    </NavigationContainer>
  )
}

export default App;