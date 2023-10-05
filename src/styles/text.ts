import { StyleSheet } from 'react-native'

import { primaryFontFamily, secondaryFontFamily } from './variants'

export const TextStyles = StyleSheet.create({
  base: {
    fontSize: 18,
    fontFamily: `${primaryFontFamily}-Regular`
  },
  secondaryBase: {
    fontSize: 18,
    fontFamily: `${secondaryFontFamily}-Regular`
  },
  // Font Size
  sm: {
    fontSize: 16
  },
  md: {
    fontSize: 18
  },
  lg: {
    fontSize: 20
  },
  xl: {
    fontSize: 22
  },
  // Font Family
  notoSans: {
    fontFamily: 'NotoSans-Regular'
  },
  dosis: {
    fontFamily: 'Dosis-Regular'
  },
  // Font Weight
  extraLight: {
    fontFamily: `${primaryFontFamily}-ExtraLight`
  },
  light: {
    fontFamily: `${primaryFontFamily}-Light`
  },
  regular: {
    fontFamily: `${primaryFontFamily}-Regular`
  },
  medium: {
    fontFamily: `${primaryFontFamily}-Medium`
  },
  semiBold: {
    fontFamily: `${primaryFontFamily}-SemiBold`
  },
  bold: {
    fontFamily: `${primaryFontFamily}-Bold`
  },
  extraBold: {
    fontFamily: `${primaryFontFamily}-ExtraBold`
  }
})

/**
 * NOTE: Fonts
 * Any fontFamily should name as same as the font name which located at /assets/fonts.
 *
 * Accessible font list:
 * Noto Sans
 * Dosis
 */
