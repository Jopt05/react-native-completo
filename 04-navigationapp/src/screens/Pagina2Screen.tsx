import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native'

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    // Le cambiamos el nombre en el navegador
    navigator.setOptions({
      title: 'Hola mundo',
      // le cambiamos el nombre en el boton de atras en ios
      // Si lo dejas vacio se queda vacio
      headerBackTitle: 'Atras'
    })
  }, [])
  

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>
            Pagina2Screen
        </Text>

        <Button 
          title='Ir página 3'
          onPress={ () => navigator.navigate('Pagina3Screen') }
        />
    </View>
  )
}
