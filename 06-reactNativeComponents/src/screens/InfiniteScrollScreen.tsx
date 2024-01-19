import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5,6,7,8,9]);

    const loadMore = () => {
        const newArray: number[] = [];
        for(let i=0; i<5; i++) {
            newArray[i] = numbers.length + i
        }
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);
    }

    const renderItem = (item: number) => {
        return (
            <FadeInImage 
                uri={`https://picsum.photos/id/${item}/500/400`}
                style={{
                    width: '100%',
                    height: 400
                }}
            />

            // <Image 
            //     source={{
            //         uri: `https://picsum.photos/id/${item}/500/400`
            //     }}
            //     style={{
            //         width: '100%',
            //         height: 400
            //     }}
            // />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ListHeaderComponent={ 
                    <Text
                        style={{
                            marginTop: 20,
                            fontSize: 20,
                            textAlign: 'center'
                        }}>
                            Infinite Scroll
                    </Text> 
                }

                data={ numbers }
                keyExtractor={(item) => item.toString()}
                renderItem={ ({item}) => renderItem(item) }

                onEndReached={ loadMore }
                /* Que tanto espacio antes de llegar al final 
                ejecutas la carga de data */
                onEndReachedThreshold={ 0.5 }

                ListFooterComponent={
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator 
                            size={20}
                            color={'blue'}
                        />
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150
    }
})