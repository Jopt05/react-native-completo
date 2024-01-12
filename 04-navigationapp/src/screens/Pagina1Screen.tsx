import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'

// Se usa con stack navigator
// interface Props extends StackScreenProps<any, any>{};

// Se usa con DrawerNavigator
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

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
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>
            Pagina1Screen
        </Text>

        <Button 
          title='Ir página 2'
          onPress={ () => navigation.navigate( "Pagina2Screen" ) }
        />

        <Text>
          Navegar con argumentos
        </Text>

        <View style={{
          flexDirection: 'row'
        }}>
          <TouchableOpacity
            style={ styles.botonGrande }
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro'
            }) }
          >
            <Text style={styles.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.botonGrande }
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria'
            }) }
          >
            <Text style={styles.botonGrandeTexto}>Maria</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
