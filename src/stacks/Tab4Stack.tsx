import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GlobalStyles } from '@/styles'
import UIScreen from '@/screens/UI'

const Stack = createNativeStackNavigator()

export default function Tab4Stack() {
  return (
    <Stack.Navigator
      initialRouteName="UI"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#0078d7'
        },
        headerTitleStyle: GlobalStyles.headerTitle
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
