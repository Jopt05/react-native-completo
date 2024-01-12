import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any>{};

export const SettingsScreen = ( { navigation }: Props ) => {

  const insets = useSafeAreaInsets();

  // Añadir menu hamburguesa
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button 
          title='Menu'
          onPress={ () => navigation.toggleDrawer() }
        />
      )
    })
  }, [])

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top,
    }}>
        <Text style={ styles.title }>
            Settings Screen
        </Text>
    </View>
  )
}
