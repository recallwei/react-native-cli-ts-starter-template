import { useState } from 'react'
import { View, Text, TextInput, Animated } from 'react-native'

export default function Home() {
  const [textValue, setTextValue] = useState('')
  return (
    <View>
      <Text>Home Page</Text>
      <Text>Welcome to use React Native!</Text>
      <TextInput
        placeholder="Please enter your content."
        value={textValue}
        onChangeText={(text) => setTextValue(text)}
      />
      <Text>{textValue}</Text>
      <Animated.Image
        source={{
          uri: 'https://www.inovex.de/wp-content/uploads/2018/03/react-native-1500x880.png',
          height: 200
        }}
      />
    </View>
  )
}
