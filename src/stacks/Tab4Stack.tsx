import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GlobalStyles } from '@/styles'
import MenuScreen from '@/screens/Menu'

const Stack = createNativeStackNavigator()

export default function Tab4Stack() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerTintColor: 'white',
        headerBackTitleStyle: GlobalStyles.headerBackTitle,
        headerStyle: {
          backgroundColor: '#0078d7'
        },
        headerTitleStyle: GlobalStyles.headerTitle
      }}
    >
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: 'Menu'
        }}
      />
    </Stack.Navigator>
  )
}
