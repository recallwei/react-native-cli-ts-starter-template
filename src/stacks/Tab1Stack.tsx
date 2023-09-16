import { useColorScheme } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GlobalStyles } from '@/styles'
import HomeScreen from '@/screens'
import ReactQueryScreen from '@/screens/ReactQuery'

const Stack = createNativeStackNavigator()

export default function Tab1Stack() {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
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
      <Stack.Screen
        name="ReactQuery"
        component={ReactQueryScreen}
        options={{
          title: 'React Query'
        }}
      />
    </Stack.Navigator>
  )
}
