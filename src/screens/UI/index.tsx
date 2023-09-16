import { Text, View } from 'react-native'

import { TextStyles } from '@/styles'

export default function UIScreen(): React.JSX.Element {
  return (
    <View>
      <Text style={TextStyles.base}>UI</Text>
    </View>
  )
}
