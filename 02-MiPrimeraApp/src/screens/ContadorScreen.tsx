import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

  return (
    <View style={ styles.container }>
        <Text style={ styles.titulo }>
            Contador: { contador }
        </Text>
        {/* <Button
            title="Click"
            onPress={() => setContador( contador + 1 )}
        /> */}
        {/* <TouchableOpacity
            style={ styles.fabLocationBL }
            onPress={() => setContador( contador - 1 )}
        >
            <View style={ styles.fab }>
                <Text style={ styles.fabText }>
                    +1
                </Text>
            </View>
        </TouchableOpacity> */}

        <Fab 
            title='+1'
            onPress={ () => setContador( contador + 1) }
            position='right'
        />
        <Fab 
            title='-1'
            onPress={ () => setContador( contador - 1) }
            position='left'
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 40,
        textAlign: 'center',
        top: -10
    },
    // botonIncrementar: {
    //     backgroundColor: 'red',
    //     borderRadius: 100
    // }
})
