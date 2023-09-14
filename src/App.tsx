import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View
} from 'react-native'
import React from 'react'

import HomePage from '@/pages'
import { TabBar } from '@/components'

export default function App(): JSX.Element {
  // Dark Mode
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff'
  }

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
        <View
          style={{
            backgroundColor: isDarkMode ? '#000' : '#fff'
          }}
        >
          <Text>Hello, React Native!</Text>
          <TabBar />
          <HomePage />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
