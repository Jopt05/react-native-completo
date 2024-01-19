import React from 'react'
import { Alert, Button, Text, View } from 'react-native'

export const AlertScreen = () => {

    function showAlert() {
        Alert.alert(
            "Titulo de Alerta",
            "Cuerpo de la alerta",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log("Cancelar"),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => console.log("OK"),
                    style: 'destructive'
                }
            ],
            {
                // Si al hacer click fuera se cierra
                cancelable: true,
                onDismiss: () => console.log('Cancel')
            }
        )
    }

  return (
    <View>
        <Text style={{ fontSize: 20, marginTop: 20, textAlign: 'center' }}>
            Alertas
        </Text>

        <Button 
            title='Mostrar alerta'
            onPress={() => showAlert() }
        />
    </View>
  )
}
