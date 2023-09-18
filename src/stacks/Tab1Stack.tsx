import { useColorScheme } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GlobalStyles } from '@/styles'
import HomeScreen from '@/screens'

const Stack = createNativeStackNavigator()

export default function Tab1Stack() {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
        headerBackTitleStyle: GlobalStyles.headerBackTitle,
        headerStyle: {
          backgroundColor: '#0078d7'
        },
        headerTitleStyle: GlobalStyles.headerTitle,
        contentStyle: {
          backgroundColor: isDarkMode ? '#000' : '#fff'
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home'
        }}
      />
    </Stack.Navigator>
  )
}
