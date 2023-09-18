import { Text, View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ListItem, YGroup } from 'tamagui'
import { Star, Moon, Sun, Cloud } from '@tamagui/lucide-icons'

import type { NavigationItem } from '@/types'
import { TextStyles } from '@/styles'

export default function CoreScreen(): React.JSX.Element {
  const { navigate } = useNavigation()
  const navigationList: NavigationItem[] = [
    {
      label: 'Tamagui UI',
      screen: 'TamaguiUI'
    },
    {
      label: 'React Query',
      screen: 'ReactQuery'
    },
    {
      label: 'Zustand',
      screen: 'Zustand'
    },
    {
      label: 'Charts',
      screen: 'Charts'
    },
    {
      label: 'day.js',
      screen: 'Dayjs'
    }
  ]
  return (
    <View>
      <FlatList
        data={navigationList}
        renderItem={({ item }) => (
          <Text
            onPress={() => navigate(item.screen)}
            style={TextStyles.base}
          >
            {item.label}
          </Text>
        )}
        keyExtractor={(item) => item.screen}
      />

      <YGroup
        alignSelf="center"
        bordered
        width={240}
        size="$4"
      >
        <YGroup.Item>
          <ListItem
            hoverTheme
            icon={Star}
            title="Star"
            subTitle="Twinkles"
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            icon={Moon}
          >
            Moon
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            icon={Sun}
          >
            Sun
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            icon={Cloud}
          >
            Cloud
          </ListItem>
        </YGroup.Item>
      </YGroup>
    </View>
  )
}
