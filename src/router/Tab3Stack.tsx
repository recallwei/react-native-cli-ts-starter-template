import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GlobalStyles } from '@/styles'
import ZustandScreen from '@/pages/Zustand'

const Stack = createNativeStackNavigator()

export default function Tab3Stack() {
  return (
    <Stack.Navigator
      initialRouteName="Zustand"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#0078d7'
        },
        headerTitleStyle: GlobalStyles.headerTitle
      }}
    >
      <Stack.Screen
        name="Zustand"
        component={ZustandScreen}
        options={{
          title: 'Zustand'
        }}
      />
    </Stack.Navigator>
  )
}
