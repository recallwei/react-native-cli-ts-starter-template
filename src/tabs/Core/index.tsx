import { YStack, ScrollView } from 'tamagui'
import { Component } from '@tamagui/lucide-icons'

import type { HomeTabScreenProps, NavigationItem } from '@/types'
import { MenuItemCard } from '@/components'
import { SafeAreaView } from 'react-native'

interface CoreNavigationItem extends NavigationItem {
  description?: string
  icon?: any
}

export default function CoreScreen({
  navigation
}: HomeTabScreenProps<'Core'>): React.JSX.Element {
  const navigationList: CoreNavigationItem[] = [
    {
      label: 'Tamagui UI',
      description: 'UI',
      screen: 'TamaguiUI',
      icon: Component
    },
    {
      label: 'React Query',
      description: 'Request state management',
      screen: 'ReactQuery',
      icon: Component
    },
    {
      label: 'Zustand',
      description: 'Global state management',
      screen: 'Zustand',
      icon: Component
    },
    {
      label: 'i18n',
      description: 'Internationalization',
      screen: 'I18n',
      icon: Component
    },
    {
      label: 'Async Storage',
      description: 'Async local storage for React Native',
      screen: 'AsyncStorage',
      icon: Component
    },
    {
      label: 'Charts',
      description: 'Chart components',
      screen: 'Charts',
      icon: Component
    },
    {
      label: 'day.js',
      description: 'Time & Date utils',
      screen: 'Dayjs',
      icon: Component
    }
  ]
  return (
    <SafeAreaView>
      <ScrollView>
        <YStack
          padding="$4"
          space="$3"
        >
          {navigationList.map((item) => (
            <MenuItemCard
              key={item.label}
              title={item.label}
              description={item.description}
              icon={Component}
              onPress={() => navigation.navigate(item.screen)}
            />
          ))}
        </YStack>
      </ScrollView>
    </SafeAreaView>
  )
}
