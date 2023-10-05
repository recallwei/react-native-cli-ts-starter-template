import { Minus, Plus } from '@tamagui/lucide-icons'
import { Text } from 'react-native'
import { Button, XStack } from 'tamagui'

import { useCounterStore } from '@/store'
import { TextStyles } from '@/styles'

export default function ZustandScreen(): React.JSX.Element {
  const { increment, decrement, count } = useCounterStore()

  return (
    <XStack
      height="100%"
      gap="$4"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        size="$3"
        icon={<Plus />}
        onPress={() => increment(1)}
      />
      <Text style={TextStyles.base}>{count}</Text>

      <Button
        size="$3"
        icon={<Minus />}
        onPress={() => decrement(1)}
      />
    </XStack>
  )
}
