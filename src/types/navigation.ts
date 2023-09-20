import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export interface NavigationItem {
  label: string
  screen: keyof (RootStackParamList & HomeTabParamList)
}

export type RootStackParamList = {
  Tabs: undefined
  ReactQuery: undefined
  Zustand: undefined
  I18n: undefined
  AsyncStorage: undefined
  Charts: undefined
  Dayjs: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type HomeTabParamList = {
  Home: undefined
  Core: undefined
  TamaguiUI: undefined
  Menu: undefined
}

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
