import { useNavigationContainerRef } from '@react-navigation/native'
import { useFlipper } from '@react-navigation/devtools'
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { TamaguiProvider } from 'tamagui'

// import { GlobalToastProvider } from '@/providers'
import config from '../tamagui.config'
import './i18n'
import Navigation from './Navigation'

export default function App(): JSX.Element {
  const queryClient = new QueryClient()

  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  return (
    <TamaguiProvider
      config={config}
      defaultTheme="light"
    >
      <QueryClientProvider client={queryClient}>
        {/* <GlobalToastProvider> */}
        <Navigation />
        {/* </GlobalToastProvider> */}
      </QueryClientProvider>
      <FlipperAsyncStorage />
    </TamaguiProvider>
  )
}
