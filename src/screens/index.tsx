import { View, Text, Image } from 'react-native'

import { TextStyles } from '@/styles'

export default function HomeScreen() {
  return (
    <View
      style={{
        margin: 10
      }}
    >
      <Image
        source={{
          uri: 'https://www.inovex.de/wp-content/uploads/2018/03/react-native-1500x880.png',
          height: 200
        }}
      />

      <Text
        style={{
          ...TextStyles.base,
          textAlign: 'center'
        }}
      >
        Hello, React Native!
      </Text>
    </View>
  )
}
