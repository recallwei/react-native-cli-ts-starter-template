import { Text } from 'react-native'
import { Button, XStack } from 'tamagui'
import { Plus, Minus } from '@tamagui/lucide-icons'

import { TextStyles } from '@/styles'
import { useCounterStore } from '@/store'

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
