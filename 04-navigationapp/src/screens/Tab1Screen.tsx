import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>
            Iconos
        </Text>

        <Text>
          <Icon name='airplane-outline' size={50} color='red' />
        </Text>
    </View>
  )
}
