import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Screens {
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

export type RootStackParamList = {
  [Screens.GREETINGS]: undefined;
  [Screens.AFTER_GREETINGS]: undefined;
  [Screens.INSPIRE]: undefined;
  [Screens.MOOD]: undefined;
  [Screens.MEDITATION]: {key: string} | undefined;
  [Screens.MEDITATION_END]: undefined;
  [Screens.MAIN]: undefined;
  [Screens.TOPICS_OVERVIEW]: undefined;
  [Screens.TOPICS_DETAILS]: {id: number};
  [Screens.STATISTIC]: undefined;
};

export type ScreenNavigationProp<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};

export type UseNavigationProp = NativeStackNavigationProp<RootStackParamList>;
