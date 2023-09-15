import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Animated,
  useColorScheme,
  FlatList
} from 'react-native'

import { TimeUtils } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import { GlobalStyles } from '@/styles'

interface NavItem {
  label: string
  screen: string
}

export default function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark'
  const { navigate } = useNavigation()
  const [textValue, setTextValue] = useState('')

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
      label: 'Chart',
      screen: 'Chart'
    }
  ]

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? '#000' : '#fff'
      }}
    >
      <Text style={GlobalStyles.text}>Hello, React Native!</Text>
      <Text style={GlobalStyles.text}>
        {TimeUtils.formatTime('2023-01-01 08:00:30', 'LL')}
      </Text>
      <View>
        <Text style={GlobalStyles.text}>Home Page</Text>
        <Text style={GlobalStyles.text}>Welcome to use React Native!</Text>
        <TextInput
          placeholder="Please enter your content."
          value={textValue}
          onChangeText={(text) => setTextValue(text)}
          style={GlobalStyles.text}
        />
        <Text>{textValue}</Text>
        <Animated.Image
          source={{
            uri: 'https://www.inovex.de/wp-content/uploads/2018/03/react-native-1500x880.png',
            height: 200
          }}
        />
        <FlatList
          data={navList}
          renderItem={({ item }) => (
            <Text
              onPress={() => navigate(item.screen)}
              style={GlobalStyles.text}
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
