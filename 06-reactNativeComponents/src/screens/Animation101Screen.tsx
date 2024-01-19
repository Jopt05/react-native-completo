import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {

  const {
    fadeIn,
    fadeOut,
    opacity,
    position,
    startMovingPosition
  } = useAnimation();
  
  return (
    <View style={ styles.container } >
        <Animated.View style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity: opacity,
          transform: [{
            translateX: position,
          }]
        }}></Animated.View>

        {/* Se usa la animacion  */}
        <Button 
          title='fadeIn'
          onPress={ () => {
            fadeIn();
            startMovingPosition(100, 300);
          }}
        />

        <Button 
          title='fadeOut'
          onPress={ fadeOut }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    purpleBox: {
        backgroundColor: 'blue',
        width: 150,
        height: 150
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
})