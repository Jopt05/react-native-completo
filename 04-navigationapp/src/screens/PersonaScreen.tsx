import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigatior/StackNavigator'

// interface RouteParams {
//     id: number;
//     nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ( { navigation, route }: Props ) => {

    // const params = route.params as RouteParams;
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])
    

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>
            {
                JSON.stringify( params, null, 3 )
            }
        </Text>
    </View>
  )
}