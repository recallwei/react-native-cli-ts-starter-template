import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Text } from 'react-native'

import { GlobalStyles } from '@/styles'
import { Tab4Stack, Tab1Stack, Tab2Stack, Tab3Stack } from '@/stacks'

const Tab = createBottomTabNavigator()

export default function App(): JSX.Element {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: GlobalStyles.tabBarLabel
          }}
        >
          <Tab.Screen
            name="Tab1"
            component={Tab1Stack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => <Text>Icon</Text>,
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Tab2"
            component={Tab2Stack}
            options={{
              tabBarLabel: 'Charts',
              headerShown: false,
              tabBarBadge: 1
            }}
          />
          <Tab.Screen
            name="Tab3"
            component={Tab3Stack}
            options={{
              tabBarLabel: 'Zustand',
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Tab4"
            component={Tab4Stack}
            options={{
              tabBarLabel: 'Menu',
              headerShown: false
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
