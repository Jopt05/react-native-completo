import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ChangeThemeScreen = () => {

  const { setDarkTheme, theme, setLightTheme } = useContext( ThemeContext );

  return (
    <View
        style={ styles.globalMargin }
    >
        <Text style={{
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
            color: theme.colors.text
        }}>
            Change Theme
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
            marginTop: 20
          }}
          activeOpacity={ 0.8 }
          onPress={ () => {
            if( theme.currentTheme == 'dark' ) {
              setLightTheme()
            } else {
              setDarkTheme()
            }
          } }
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20
            }}
          >
            Light / Dark
          </Text>
        </TouchableOpacity>
    </View>
  )
}