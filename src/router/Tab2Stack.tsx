import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ChartPage from '@/pages/Chart'

const Stack = createNativeStackNavigator()

export default function Tab2Stack() {
  return (
    <Stack.Navigator
      initialRouteName="Chart"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#0078d7'
        }
      }}
    >
      <Stack.Screen
        name="Chart"
        component={ChartPage}
        options={{
          title: 'Chart'
        }}
      />
    </Stack.Navigator>
  )
}
