import { View, Text, Animated, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { TimeUtils } from '@/utils'
import { TextStyles } from '@/styles'

interface NavItem {
  label: string
  screen: string
}

export default function HomeScreen() {
  const { navigate } = useNavigation()

  const navList: NavItem[] = [
    {
      label: 'React Query',
      screen: 'ReactQuery'
    },
    {
      label: 'UI Framework',
      screen: 'UI'
    },
    {
      label: 'Global State Management',
      screen: 'Zustand'
    },
    {
      label: 'Charts',
      screen: 'Charts'
    }
  ]

  return (
    <View
      style={{
        margin: 10
      }}
    >
      <Animated.Image
        source={{
          uri: 'https://www.inovex.de/wp-content/uploads/2018/03/react-native-1500x880.png',
          height: 200
        }}
      />

      <Text style={TextStyles.base}>Hello, React Native!</Text>

      <Text style={TextStyles.base}>
        {TimeUtils.formatTime('2023-01-01 08:00:30', 'LL')}
      </Text>

      <View>
        <Text style={TextStyles.base}>Welcome to use React Native!</Text>

        <FlatList
          data={navList}
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
      </View>
    </View>
  )
}
