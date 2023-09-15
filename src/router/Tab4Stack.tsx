import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UIScreen from '@/pages/UI'

const Stack = createNativeStackNavigator()

export default function Tab4Stack() {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#0078d7'
        }
      }}
    >
      <Stack.Screen
        name="UI"
        component={UIScreen}
        options={{
          title: 'UI'
        }}
      />
    </Stack.Navigator>
  )
}
