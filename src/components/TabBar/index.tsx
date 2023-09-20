import { useColorScheme } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Menu, Palette, Star } from '@tamagui/lucide-icons'

import { GlobalStyles } from '@/styles'
import type { BottomTabNavigatorParamList } from '@/types'
import HomeScreen from '@/tabs/Home'
import CoreScreen from '@/tabs/Core'
import TamaguiUIScreen from '@/tabs/TamaguiUI'
import MenuScreen from '@/tabs/Menu'
import { useCounterStore } from '@/store'

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>()

export default function TabBar(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const { count } = useCounterStore()

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: true,
        headerTintColor: 'white',
        headerBackTitleStyle: GlobalStyles.headerBackTitle,
        headerStyle: {
          backgroundColor: '#0078d7'
        },
        headerTitleStyle: GlobalStyles.headerTitle,
        contentStyle: {
          backgroundColor: isDarkMode ? '#000' : '#fff'
        },
        tabBarLabelStyle: GlobalStyles.tabBarLabel,
        tabBarActiveTintColor: '#0078d7',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {
          fontSize: 10
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
        name="Core"
        component={CoreScreen}
        options={{
          tabBarLabel: 'Core',
          tabBarBadge: count > 0 ? count : undefined,
          tabBarIcon: ({ color, size }) => (
            <Star
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="TamaguiUI"
        component={TamaguiUIScreen}
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
        name="Menu"
        component={MenuScreen}
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
  )
}
