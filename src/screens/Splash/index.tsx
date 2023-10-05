import { Spinner, YStack } from 'tamagui'

export default function SplashScreen(): React.JSX.Element {
  return (
    <YStack
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        color="#0078d7"
        size="large"
      />
    </YStack>
  )
}
