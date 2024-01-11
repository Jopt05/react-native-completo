import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface BotonProps {
    texto: string;
    color?: string;
    seExpande?: boolean;
    accion: ( numeroTexto: string ) => void;
}

export const BotonCalc = ({ texto, color = "#2D2D2D", seExpande, accion }: BotonProps) => {
  return (
    <TouchableOpacity
        onPress={ () => accion( texto ) }
    >
        <View style={{
            ...styles.boton,
            backgroundColor: color,
            // Expande el boton
            width: (seExpande) ? 180 : 80
        }}>
            <Text style={{
                ...styles.botonTexto,
                color: (color == "#9B9B9B") 
                    ? 'black' 
                    : 'white',
            }}>
                {texto}
            </Text>
        </View>
    </TouchableOpacity>
  )
}
