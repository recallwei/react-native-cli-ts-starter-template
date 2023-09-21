import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import {
  Button,
  Input,
  YStack,
  Text,
  XStack,
  View,
  Checkbox,
  Label
} from 'tamagui'
import { Atom, User, Lock, Check } from '@tamagui/lucide-icons'

import { AuthAPI } from '@/api'
import { useAuthStore } from '@/store'

export default function LoginScreen(): React.JSX.Element {
  const authStore = useAuthStore()
  const [formData, setFormData] = useState({
    account: '',
    password: ''
  })

  const [rememberPassword, setRememberPassword] = useState(false)

  const { mutate } = useMutation({
    mutationFn: () => AuthAPI.login(),
    onSuccess: () => {},
    onError: (error) => {
      console.log(error)
      authStore.login()
    }
  })

  const handleLogin = () => {
    mutate()
  }

  return (
    <YStack
      space="$4"
      padding="$6"
      paddingBottom="$12"
      justifyContent="center"
      alignItems="center"
      height="100%"
      minWidth={300}
    >
      <YStack
        alignItems="center"
        space="$2"
        marginBottom="$2"
      >
        <Atom
          size="$6"
          color="#0078d7"
        />
        <Text fontSize="$8">Demo App</Text>
      </YStack>

      <XStack
        width="100%"
        position="relative"
      >
        <Input
          width="100%"
          maxLength={16}
          paddingLeft="$8"
          placeholder="Please enter the account"
          value={formData.account}
          onChangeText={(text) => {
            setFormData((prev) => ({
              ...prev,
              account: text
            }))
          }}
        />
        <View
          position="absolute"
          left="$3"
          alignSelf="center"
        >
          <User />
        </View>
      </XStack>

      <XStack
        width="100%"
        position="relative"
      >
        <Input
          width="100%"
          maxLength={16}
          paddingLeft="$8"
          placeholder="Please enter the password"
          value={formData.password}
          onChangeText={(text) => {
            setFormData((prev) => ({
              ...prev,
              password: text
            }))
          }}
        />
        <View
          position="absolute"
          left="$3"
          alignSelf="center"
        >
          <Lock />
        </View>
      </XStack>

      <XStack
        width="100%"
        space="$2"
        alignItems="center"
      >
        <Checkbox
          checked={rememberPassword}
          onCheckedChange={(checked: boolean) => {
            setRememberPassword(checked)
          }}
        >
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </Checkbox>

        <Label>Remember password</Label>
      </XStack>

      <Button
        width="100%"
        onPress={handleLogin}
      >
        Login
      </Button>
    </YStack>
  )
}
