import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Movie, MovieResponse } from '../interfaces/movieInterface'
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface MovieDetailProps {
    movieDetails: MovieResponse;
    cast: Cast[];
}

export const MovieDetails = ({ movieDetails, cast }: MovieDetailProps) => {
  return (
    <>
        {/* Detalles */}
        <View style={ styles.detailsContainer }>
          <View style={ styles.detailsRow }>
            <Icon 
              name='star-outline'
              color={"grey"}
              size={16}
            />

            <Text style={ styles.votes }>
              { movieDetails.vote_average }
            </Text>

            <Text style={styles.genres}>
              - { movieDetails.genres.map( g => g.name).join(", ") }
            </Text>
          </View>

          <Text style={ styles.story }>
            Review
          </Text>

          <Text style={ styles.details }>
            { movieDetails.overview }
          </Text>

          <Text style={ styles.story }>
            Presupuesto
          </Text>
          <Text style={ styles.details }>
            { currencyFormatter.format( movieDetails.budget, { code: 'USD' } ) }
          </Text>
        </View>

        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 100, marginHorizontal: 20 }}>
          <Text style={ styles.story }>
            Cast
          </Text>
          
          <FlatList 
            data={ cast }
            keyExtractor={(item: Cast) => item.id.toString()}
            renderItem={({ item }) => <CastItem actor={item}/>}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, height: 70 }}
          />

        </View>

    </>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20
  },
  detailsRow: {
    flexDirection: 'row'
  },
  votes: {
    marginLeft: 5,
  },
  genres: {
    marginLeft: 5
  },
  story: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  details: {
    fontSize: 16
  }
})
