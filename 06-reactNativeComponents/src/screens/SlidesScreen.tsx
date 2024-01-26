import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const SlidesScreen = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const navigation = useNavigation();

    const renderItem = (item: Slide) => (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center'
            }}
        >
            <Image 
                source={ item.img }
                style={{
                    width: 350,
                    height: 400,
                    resizeMode: 'center'
                }}
            />
            <Text>
                { item.title }
            </Text>
            <Text>
                { item.desc }
            </Text>
        </View>
    )

  return (
    <SafeAreaView
        style={{
            flex: 1,
            // backgroundColor: 'red',
            // paddingTop: 50
        }}
    >

        <Carousel
        //   ref={(c) => { this._carousel = c; }}
            data={ items }
            renderItem={ ({item}) => renderItem(item)}
            sliderWidth={ screenWidth }
            itemWidth={ screenWidth }
            layout='default'
            onSnapToItem={ (index) => {
                setActiveIndex(index)
            }}
        />

        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20
        }}>
            <Pagination 
                dotsLength={ items.length }
                activeDotIndex={ activeIndex }
                dotStyle={{
                    width: 30,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: '#5856D6'
                }}
            />

            {
                ( activeIndex == items.length - 1 ) && (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#5856D6',
                            width: 140,
                            height: 50,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        activeOpacity={ 0.8 }
                        onPress={ () => navigation.goBack() }
                    >
                        <Text style={{
                            fontSize: 25,
                            color: 'white'
                        }}>Entrar</Text>
                        <Icon 
                            name='chevron-forward-outline'
                            color='white'
                            size={25}
                        />
                    </TouchableOpacity>
                )
            }
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})