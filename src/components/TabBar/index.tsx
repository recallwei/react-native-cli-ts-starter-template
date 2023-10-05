import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Menu, Palette, Star } from '@tamagui/lucide-icons'
import { useTranslation } from 'react-i18next'

import { useCounterStore } from '@/store'
import { GlobalStyles } from '@/styles'
import CoreScreen from '@/tabs/Core'
import HomeScreen from '@/tabs/Home'
import MenuScreen from '@/tabs/Menu'
import TamaguiUIScreen from '@/tabs/TamaguiUI'
import type { HomeTabParamList } from '@/types'

const Tab = createBottomTabNavigator<HomeTabParamList>()

export default function TabBar(): React.JSX.Element {
  const { count } = useCounterStore()
  const { t } = useTranslation('global')
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitleStyle: GlobalStyles.headerBackTitle,
        headerStyle: {
          backgroundColor: '#0078d7'
        },
        headerTitleStyle: GlobalStyles.headerTitle,
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
          headerTitle: t('Screens.Home'),
          tabBarLabel: t('Tabs.Home'),
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
          headerTitle: t('Screens.Core'),
          tabBarLabel: t('Tabs.Core'),
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
          headerTitle: t('Screens.UI'),
          tabBarLabel: t('Tabs.UI'),
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
          headerTitle: t('Screens.Menu'),
          tabBarLabel: t('Tabs.Menu'),
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
