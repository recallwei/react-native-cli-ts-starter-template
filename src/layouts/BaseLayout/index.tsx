import type { PropsWithChildren } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

export default function BaseLayout(
  props: PropsWithChildren
): React.JSX.Element {
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
      {props.children}
    </SafeAreaView>
  )
}
