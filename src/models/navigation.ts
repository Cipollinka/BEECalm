import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum ScreenNames {
  GREETINGS = 'greetings',
  AFTER_GREETINGS = 'afterGreetings',
  INSPIRE = 'inspire',

  MOOD = 'mood',

  MAIN = 'main',

  STATISTIC = 'statistic',
}

export type AppStackParamList = {
  [ScreenNames.GREETINGS]: undefined;
  [ScreenNames.AFTER_GREETINGS]: undefined;
  [ScreenNames.INSPIRE]: undefined;
  [ScreenNames.MOOD]: undefined;
  [ScreenNames.MAIN]: undefined;
  [ScreenNames.STATISTIC]: undefined;
};

export type NavigationPropForScreen<T extends keyof AppStackParamList> = {
  navigation: NativeStackNavigationProp<AppStackParamList, T>;
};

export type GlobalNavigationProp = NativeStackNavigationProp<AppStackParamList>;
