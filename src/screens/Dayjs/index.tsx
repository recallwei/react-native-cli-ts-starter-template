import { Text, View } from 'react-native'

import { TimeUtils } from '@/utils'
import { TextStyles } from '@/styles'

export default function DayjsScreen(): React.JSX.Element {
  return (
    <View
      style={{
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100
      }}
    >
      <Text
        style={{
          ...TextStyles.base,
          textAlign: 'center'
        }}
      >
        {TimeUtils.formatTime('2023-09-01 08:00:00', 'LL')}
      </Text>
    </View>
  )
}
