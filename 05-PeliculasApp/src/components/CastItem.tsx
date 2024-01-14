import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    actor: Cast;
}

export const CastItem = ({ actor }: Props) => {

    const imageUri = 'https://image.tmdb.org/t/p/w500' + actor.profile_path;

  return (
    <View style={styles.container}>
        <Image
            style={ styles.image }
            source={{
                uri: imageUri
            }}
        />
        
        <View style={styles.characterContainer}>
            <Text style={ styles.name }>
                { actor.name }
            </Text>
            <Text style={ styles.character }>
                { actor.character }
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderRadius: 10,
        marginLeft: 20,
        paddingRight: 10,
        height: 50
    },
    characterContainer: {
        marginLeft: 10,
        marginTop: 3
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    character: {
        fontSize: 16,
        opacity: 0.7
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10
    }
})