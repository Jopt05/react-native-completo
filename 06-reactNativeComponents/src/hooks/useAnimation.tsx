import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

  const opacity = useRef( new Animated.Value(0) ).current;
  const position = useRef( new Animated.Value(0) ).current;

  const fadeIn = ( duration = 300 ) => {
    // Dispara animación con tiempo
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: duration,
        useNativeDriver: true
      }
    ).start()
  }

  const fadeOut = () => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }
    ).start()
  }

  const startMovingPosition = ( initPosition: number = -100, duration: number = 300 ) => {
    
    position.setValue(initPosition);

    Animated.timing(
        position,
        {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        //   easing: Easing.bounce
        }
      ).start()
  }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }
}
