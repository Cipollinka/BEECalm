import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum ScreenNames {
  GREETINGS = 'greetings',
  AFTER_GREETINGS = 'afterGreetings',
  INSPIRE = 'inspire',

  MOOD = 'mood',

  MEDITATION = 'meditation',
  MEDITATION_END = 'meditation_end',

  MAIN = 'main',

  TOPICS_OVERVIEW = 'topics',
  TOPICS_DETAILS = 'topics_details',
  STATISTIC = 'statistic',
}

export type AppStackParamList = {
  [ScreenNames.GREETINGS]: undefined;
  [ScreenNames.AFTER_GREETINGS]: undefined;
  [ScreenNames.INSPIRE]: undefined;
  [ScreenNames.MOOD]: undefined;
  [ScreenNames.MEDITATION]: {key: string} | undefined;
  [ScreenNames.MEDITATION_END]: undefined;
  [ScreenNames.MAIN]: undefined;
  [ScreenNames.TOPICS_OVERVIEW]: undefined;
  [ScreenNames.TOPICS_DETAILS]: {id: number};
  [ScreenNames.STATISTIC]: undefined;
};

export type NavigationPropForScreen<T extends keyof AppStackParamList> = {
  navigation: NativeStackNavigationProp<AppStackParamList, T>;
};

export type GlobalNavigationProp = NativeStackNavigationProp<AppStackParamList>;
