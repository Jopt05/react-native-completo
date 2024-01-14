import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const dimensions = Dimensions.get('screen');

export const DetailScreen = ({ route, navigation }: Props) => {

  const movie = route.params;
  const imageUri = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

  const { fullMovie, cast, isLoading } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={ styles.imageContainer }>
          <Image 
            source={{
              uri: imageUri
            }}
            style={ styles.posterImage }
          />
      </View>

      <View style={ styles.marginContainer }>
        <Text style={ styles.subtitle }>
          { movie.original_title }
        </Text>
        <Text style={ styles.title }>
          { movie.title }
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        {
          isLoading
            ? <ActivityIndicator size={30} color={"grey"}/>
            : <MovieDetails movieDetails={fullMovie!} cast={cast} />
        }
      </View>

      {/* Boton para cerrar */}

      <TouchableOpacity
        style={styles.backButton}
        onPress={ () => navigation.goBack() }
      >
        <Icon 
          name='arrow-back-outline'
          size={50}
          color={'white'}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    overflow: 'hidden',
    height: dimensions.height * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
    
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 20,
    left: 20
  }
})
