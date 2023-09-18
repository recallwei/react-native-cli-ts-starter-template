import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GlobalStyles } from '@/styles'
import TamaguiUIScreen from '@/screens/TamaguiUI'

const Stack = createNativeStackNavigator()

export default function Tab3Stack() {
  return (
    <Stack.Navigator
      initialRouteName="TamaguiUI"
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
        name="TamaguiUI"
        component={TamaguiUIScreen}
        options={{
          title: 'Tamagui UI'
        }}
      />
    </Stack.Navigator>
  )
}
