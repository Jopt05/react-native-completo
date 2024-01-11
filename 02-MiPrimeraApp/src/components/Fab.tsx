import React from 'react'
import { StyleSheet, Text, Platform, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native'

interface Props {
    title: string;
    onPress: () => void;
    position: 'left' | 'right';
}

export const Fab = ({ title, onPress, position }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.1 }
                style={ position == 'left' ? styles.fabLocationBL : styles.fabLocationBr }
                onPress={onPress}
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    };

    const android = () => {
        return (
            <View
                style={ position == 'left' ? styles.fabLocationBL : styles.fabLocationBr }
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    // Soluciona por completo la sombra
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

  return Platform.OS == "ios" ? ios() : android();
}

const styles = StyleSheet.create({
    fabLocationBr: {
        position:'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBL: {
        position:'absolute',
        bottom: 25,
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 2
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
