import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from './src/navigation/StackNavigator';
// import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const CustomTheme: Theme = {
//   // Se especifica si por default estará en modo oscuro
//   dark: false,
//   colors: {
//     ...DarkTheme.colors,
//     background: 'black'
//     // primary: string;
//     // background: string;
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   }
// }

export default function App() {
  return (
    <AppState>
        <StackNavigator />
    </AppState>
  );
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}