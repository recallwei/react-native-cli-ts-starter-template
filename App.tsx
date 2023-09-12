import React, { useState, useEffect, useRef } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Animated
} from 'react-native'

import { Colors, Header } from 'react-native/Libraries/NewAppScreen'

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }
  const fadeAnim = useRef(new Animated.Value(0)).current
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true
    }).start()
  }, [fadeAnim])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white
          }}
        >
          <Text>Hello World</Text>
          <Text style={{ color: 'white' }}>2771</Text>
          <Animated.View
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: 200,
              borderRadius: 20,
              shadowColor: '#000',
              transform: isTouch ? [{ scale: 0.9 }] : [{ scale: 1 }],
              opacity: fadeAnim
            }}
            onTouchStart={() => {
              setIsTouch(true)
              fadeAnim.setValue(0)
            }}
            onTouchEnd={() => {
              setIsTouch(false)
              fadeAnim.setValue(1)
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
