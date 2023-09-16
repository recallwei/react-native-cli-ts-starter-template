import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GlobalStyles } from '@/styles'
import ChartsScreen from '@/screens/Charts'

const Stack = createNativeStackNavigator()

export default function Tab2Stack() {
  return (
    <Stack.Navigator
      initialRouteName="Charts"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#0078d7'
        },
        headerTitleStyle: GlobalStyles.headerTitle
      }}
    >
      <Stack.Screen
        name="Charts"
        component={ChartsScreen}
        options={{
          title: 'Charts'
        }}
      />
    </Stack.Navigator>
  )
}
