import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>
            Iconos
        </Text>

        <Text>
          <TouchableIcon IconName='airplane-outline'/>
          <TouchableIcon IconName='airplane-outline'/>
          <TouchableIcon IconName='airplane-outline'/>
          <TouchableIcon IconName='airplane-outline'/>
          <TouchableIcon IconName='airplane-outline'/>
          <TouchableIcon IconName='airplane-outline'/>
        </Text>
    </View>
  )
}
