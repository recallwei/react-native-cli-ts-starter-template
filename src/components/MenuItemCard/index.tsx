import { ChevronRight, Menu } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Card, H3, Paragraph, View, XStack, YStack } from 'tamagui'

interface Props {
  title?: string
  description?: string
  icon?: any
  onPress?: () => void
}

export default function MenuItemCard(props: Props) {
  const [isPressing, setIsPressing] = useState(false)
  return (
    <Card
      size="$3"
      bordered
      animation="bouncy"
      width="100%"
      height="auto"
      pressStyle={{ scale: 0.95 }}
      onPress={() => {
        if (typeof props.onPress === 'function') {
          props.onPress()
        }
      }}
      onPressIn={() => setIsPressing(true)}
      onPressOut={() => setIsPressing(false)}
    >
      <Card.Header
        padded
        position="relative"
      >
        <XStack
          alignItems="flex-start"
          space="$3"
        >
          <View marginTop={5}>
            {props.icon ? <props.icon size="$1" /> : <Menu size="$1" />}
          </View>
          <YStack>
            <H3>{props.title}</H3>
            <Paragraph theme="alt2">{props.description}</Paragraph>
          </YStack>
        </XStack>

        <View
          position="absolute"
          right={10}
          top={0}
          bottom={0}
          justifyContent="center"
          alignItems="center"
          alignSelf="center"
          animation="bouncy"
          style={{
            transform: [
              {
                translateX: isPressing ? -10 : 0
              }
            ]
          }}
        >
          <ChevronRight />
        </View>
      </Card.Header>
    </Card>
  )
}
export type MenuItemCardProps = Props
