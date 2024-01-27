import React, { useContext } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions'
import { PermissionsContext } from '../context/PermissionsContext'

export const PermissionsScreen = () => {

  const { permissions, askLocationPermission } = useContext( PermissionsContext );

  return (
    <View style={ styles.container }>
        <Text style={ styles.text }>
            Permissions Screen
        </Text>

        <Button 
          title='Permiso'
          onPress={ askLocationPermission }
        />

        <Text style={ styles.text }>
          { JSON.stringify(permissions, null, 5) }
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'red',
    marginBottom: 20
  }
})
