import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';

interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: MoviePosterProps) => {

  const imageUri = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate("DetailScreen", movie) }
      
      activeOpacity={0.8}
      style={{
        width: width,
        height: height,
        marginHorizontal: 5
    }}>
      <View style={ styles.imageContainer }>
        <Image 
          source={{
            uri: imageUri
          }}
          style={ styles.image }
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 18,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18
  }
})