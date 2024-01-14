import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { MoviePoster } from './MoviePoster';
import { FlatList, Text, View } from 'react-native';

interface HorizontalSliderProps {
    data: Movie[];
    title: string;
}

export const HorizontalSlider = ({ data, title }: HorizontalSliderProps) => {
  return (
    <View style={{
        // backgroundColor: 'red',
        height: 270
      }}>

        <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 10
        }}>
            { title }
        </Text>
        
        <FlatList 
            data={ data }
            renderItem={({ item }: { item: Movie }) => (
                <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={ (item: Movie) => item.id.toString() }
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
        />

    </View>
  )
}
