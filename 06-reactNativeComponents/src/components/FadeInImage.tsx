import React, { useState } from 'react'
import { useAnimation } from '../hooks/useAnimation';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const [isLoading, setIsLoading] = useState(true);

    const { opacity, fadeIn } = useAnimation();

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {
                isLoading && <ActivityIndicator
                    style={{ 
                        position: 'absolute'
                    }}
                    color={'blue'}
                    size={30}
                />
            }
            <Animated.Image
                // Método de imagenes
                onLoadEnd={ () => {
                    fadeIn();
                    setIsLoading(false);
                }}

                source={{
                    uri
                }}
                style={{
                    // Se coloca como any
                    ...style as any,
                    opacity
                }}
                // style={{
                //     width: '100%',
                //     height: 400,
                //     opacity
                // }}
            />
        </View>
    )
}
