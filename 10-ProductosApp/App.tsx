import 'react-native-gesture-handler';
import React from 'react'
import Navigator from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/context/AuthContext';

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  )
}

export default App;