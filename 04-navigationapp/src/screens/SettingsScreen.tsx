import React, { useContext, useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any>{};

export const SettingsScreen = ( { navigation }: Props ) => {

  const insets = useSafeAreaInsets();

  // const context = useContext( AuthContext );
  const { authState } = useContext( AuthContext );

  useContext

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

        <Text>
          { JSON.stringify( authState, null, 4 ) }
        </Text>

        {
          authState.favoriteIcon && (
            <Text>
              <Icon
                name={ authState.favoriteIcon }
                size={20}
                color={'blue'}
              />
            </Text>
          )
        }
    </View>
  )
}
