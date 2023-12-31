import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'

import { TabBar } from '@/components'
import {
  AsyncStorageScreen,
  ChartsScreen,
  DayjsScreen,
  ForgotPasswordScreen,
  I18nScreen,
  LoginScreen,
  ReactQueryScreen,
  SignUpScreen,
  SplashScreen,
  ZustandScreen
} from '@/screens'
import { useAuthStore } from '@/store'
import { GlobalStyles } from '@/styles'
import type { RootStackParamList } from '@/types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Navigation(): React.JSX.Element {
  const { isLogin, isLoading, loaded } = useAuthStore()

  useEffect(() => {
    setTimeout(() => {
      loaded()
    }, 3000)
  }, [])

  return (
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#ffffff',
            headerBackTitleStyle: GlobalStyles.headerBackTitle,
            headerStyle: {
              backgroundColor: '#0078d7'
            },
            headerTitleStyle: GlobalStyles.headerTitle,
            animation: 'slide_from_right'
          }}
        >
          {isLogin ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={TabBar}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="ReactQuery"
                component={ReactQueryScreen}
                options={{
                  title: 'React Query'
                }}
              />
              <Stack.Screen
                name="Zustand"
                component={ZustandScreen}
                options={{
                  title: 'Zustand'
                }}
              />
              <Stack.Screen
                name="I18n"
                component={I18nScreen}
                options={{
                  title: 'i18n'
                }}
              />
              <Stack.Screen
                name="AsyncStorage"
                component={AsyncStorageScreen}
                options={{
                  title: 'Async Storage'
                }}
              />
              <Stack.Screen
                name="Charts"
                component={ChartsScreen}
                options={{
                  title: 'Charts'
                }}
              />
              <Stack.Screen
                name="Dayjs"
                component={DayjsScreen}
                options={{
                  title: 'day.js'
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{
                  headerShown: false
                }}
              />
            </>
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
