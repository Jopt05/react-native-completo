import Carousel from 'react-native-snap-carousel';

import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../interfaces/movieInterface';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  
  const { 
    nowPlayingMovies, 
    isLoading, 
    popularMovies,
    topRatedMovies,
    upComingMovies
  } = useMovies();

  const insets = useSafeAreaInsets();

  if( isLoading ) {
    return (
      <View>
        <ActivityIndicator color={"red"} size={100} />
      </View>
    )
  }

  return (
    <ScrollView>
      
      <View style={{ marginTop: insets.top }}>

        {/* Carousel principal */}
        <View style={{
          height: 440
        }}>
          <Carousel
            data={nowPlayingMovies}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
          />
        </View>

        <HorizontalSlider 
          data={ popularMovies }
          title='Populares'
        />

        <HorizontalSlider 
          data={ topRatedMovies }
          title='Top Rated'
        />

        <HorizontalSlider 
          data={ upComingMovies }
          title='Upcoming'
        />

      </View>
    </ScrollView>
  )
}
