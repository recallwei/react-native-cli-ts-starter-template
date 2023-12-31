import {
  Compass,
  Component,
  Gem,
  Power,
  ServerCog,
  Settings,
  UserCog,
  Users
} from '@tamagui/lucide-icons'
import { SafeAreaView } from 'react-native'
import { ScrollView, YStack } from 'tamagui'

// import { useToastController } from '@tamagui/toast'
import { MenuItemCard } from '@/components'
import { useAuthStore } from '@/store'
import { AuthUtils } from '@/utils'

export default function MenuScreen(): React.JSX.Element {
  // const { show } = useToastController()

  const authStore = useAuthStore()

  const logout = () => {
    authStore.logout()
    AuthUtils.removeToken().catch(() => {})
  }

  const featureNotFinished = () => {
    // show('This feature have not finished yet!')
    // setTimeout(() => {
    //   hide()
    // }, 1500)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <YStack
          padding="$4"
          space="$3"
        >
          <MenuItemCard
            title="System"
            description="System configuration"
            icon={ServerCog}
            onPress={featureNotFinished}
          />
          <MenuItemCard
            title="Account"
            description="User profile"
            icon={UserCog}
          />
          <MenuItemCard
            title="Settings"
            description="Personal custom settings"
            icon={Settings}
          />
          <MenuItemCard
            title="Services"
            description="Official services we provide"
            icon={Component}
          />
          <MenuItemCard
            title="Support"
            description="Official supports"
            icon={Gem}
          />
          <MenuItemCard
            title="Explore"
            description="Explore something new"
            icon={Compass}
          />
          <MenuItemCard
            title="Community"
            description="Join the community"
            icon={Users}
          />
          <MenuItemCard
            title="Logout"
            description="Log out and back to login"
            icon={Power}
            onPress={logout}
          />
        </YStack>
      </ScrollView>
    </SafeAreaView>
  )
}
