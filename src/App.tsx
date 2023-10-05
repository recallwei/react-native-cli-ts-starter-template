import './i18n'

import { useFlipper } from '@react-navigation/devtools'
import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced'
import { TamaguiProvider } from 'tamagui'

// import { GlobalToastProvider } from '@/providers'
import config from '../tamagui.config'
import Navigation from './Navigation'

export default function App(): JSX.Element {
  const [queryClient] = useState(() => new QueryClient())

  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  return (
    <TamaguiProvider
      config={config}
      defaultTheme="light"
    >
      <QueryClientProvider client={queryClient}>
        {/* <GlobalToastProvider> */}
        <NavigationContainer ref={navigationRef}>
          <Navigation />
        </NavigationContainer>
        {/* </GlobalToastProvider> */}
      </QueryClientProvider>
      <FlipperAsyncStorage />
    </TamaguiProvider>
  )
}
