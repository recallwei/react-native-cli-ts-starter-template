import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { TamaguiProvider } from 'tamagui'
import { Home, Menu, Palette, Star } from '@tamagui/lucide-icons'

import { GlobalStyles } from '@/styles'
import { Tab4Stack, Tab1Stack, Tab2Stack, Tab3Stack } from '@/stacks'
import config from '../tamagui.config'

const Tab = createBottomTabNavigator()

export default function App(): JSX.Element {
  const queryClient = new QueryClient()

  return (
    <TamaguiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={() => ({
              headerShown: false,
              tabBarLabelStyle: GlobalStyles.tabBarLabel,
              tabBarActiveTintColor: '#0078d7',
              tabBarInactiveTintColor: 'gray',
              tabBarIconStyle: {
                fontSize: 10
              }
            })}
          >
            <Tab.Screen
              name="Tab1"
              component={Tab1Stack}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Home
                    color={color}
                    size={size}
                  />
                )
              }}
            />
            <Tab.Screen
              name="Tab2"
              component={Tab2Stack}
              options={{
                tabBarLabel: 'Core',
                tabBarBadge: 1,
                tabBarIcon: ({ color, size }) => (
                  <Star
                    color={color}
                    size={size}
                  />
                )
              }}
            />
            <Tab.Screen
              name="Tab3"
              component={Tab3Stack}
              options={{
                tabBarLabel: 'UI',
                tabBarIcon: ({ color, size }) => (
                  <Palette
                    color={color}
                    size={size}
                  />
                )
              }}
            />
            <Tab.Screen
              name="Tab4"
              component={Tab4Stack}
              options={{
                tabBarLabel: 'Menu',
                tabBarIcon: ({ color, size }) => (
                  <Menu
                    color={color}
                    size={size}
                  />
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </TamaguiProvider>
  )
}
