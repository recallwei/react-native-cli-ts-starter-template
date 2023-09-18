import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GlobalStyles } from '@/styles'
import CoreScreen from '@/screens/Core'
import ReactQueryScreen from '@/screens/ReactQuery'
import ZustandScreen from '@/screens/Zustand'
import ChartsScreen from '@/screens/Charts'
import DayjsScreen from '@/screens/Dayjs'

const Stack = createNativeStackNavigator()

export default function Tab2Stack() {
  return (
    <Stack.Navigator
      initialRouteName="Core"
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
        name="Core"
        component={CoreScreen}
        options={{
          title: 'Core'
        }}
      />
      <Stack.Screen
        name="ReactQuery"
        component={ReactQueryScreen}
        options={{
          title: 'React Query'
        }}
      />
      <Stack.Screen
        name="Zustand"
        component={ZustandScreen}
        options={{
          title: 'Zustand'
        }}
      />
      <Stack.Screen
        name="Charts"
        component={ChartsScreen}
        options={{
          title: 'Charts'
        }}
      />
      <Stack.Screen
        name="Dayjs"
        component={DayjsScreen}
        options={{
          title: 'day.js'
        }}
      />
    </Stack.Navigator>
  )
}
