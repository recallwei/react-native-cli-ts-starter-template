import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SvgUri } from 'react-native-svg'

import { GlobalStyles } from '@/styles'
import { Tab4Stack, Tab1Stack, Tab2Stack, Tab3Stack } from '@/stacks'
import { View } from 'react-native'

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
              tabBarIcon: () => (
                <View>
                  <SvgUri
                    width="20"
                    height="20"
                    color="#000"
                    uri="https://api.iconify.design/line-md:home-md.svg"
                  />
                </View>
              ),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Tab2"
            component={Tab2Stack}
            options={{
              tabBarLabel: 'Core',
              headerShown: false,
              tabBarBadge: 1
            }}
          />
          <Tab.Screen
            name="Tab3"
            component={Tab3Stack}
            options={{
              tabBarLabel: 'UI',
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
