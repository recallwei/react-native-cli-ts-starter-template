import { useColorScheme } from 'react-native'
import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFlipper } from '@react-navigation/devtools'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { TamaguiProvider } from 'tamagui'

import config from '../tamagui.config'
import { GlobalStyles } from '@/styles'
import { TabBar } from '@/components'
import {
  DayjsScreen,
  ChartsScreen,
  ZustandScreen,
  ReactQueryScreen
} from '@/screens'
import type { RootStackParamList } from '@/types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App(): JSX.Element {
  const queryClient = new QueryClient()
  const isDarkMode = useColorScheme() === 'dark'

  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  return (
    <TamaguiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: 'white',
              headerBackTitleStyle: GlobalStyles.headerBackTitle,
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
              name="Tabs"
              component={TabBar}
              options={{
                headerShown: false
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
        </NavigationContainer>
      </QueryClientProvider>
    </TamaguiProvider>
  )
}
