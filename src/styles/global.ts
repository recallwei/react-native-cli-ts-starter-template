import { StyleSheet } from 'react-native'

import { primaryFontFamily } from './variants'

export const GlobalStyles = StyleSheet.create({
  // Header
  headerTitle: {
    fontSize: 20,
    fontFamily: `${primaryFontFamily}-Bold`
  },
  headerBackTitle: {
    fontSize: 18,
    fontFamily: `${primaryFontFamily}-SemiBold`
  },
  // TabBar
  tabBarLabel: {
    fontSize: 16,
    fontFamily: `${primaryFontFamily}-Medium`
  }
})
