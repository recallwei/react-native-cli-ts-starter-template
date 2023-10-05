import { SafeAreaView, Text } from 'react-native'

import { TextStyles } from '@/styles'

export default function TamaguiUIScreen(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={TextStyles.base}>Tamagui UI</Text>
    </SafeAreaView>
  )
}
