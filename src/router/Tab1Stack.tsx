import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '@/pages'
import ReactQueryScreen from '@/pages/ReactQuery'

const Stack = createNativeStackNavigator()

export default function Tab1Stack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#0078d7'
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
