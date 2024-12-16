import {Mood, MoodIndex} from '@/types';
import {getPersistStoreOptions} from '@/utils/getPersistStoreOptions';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface State {
  isFirstTaskDone: boolean;
  setIsFirstTaskDone: (isFirstTaskDone: boolean) => void;

  isSecondTaskDone: boolean;
  setIsSecondTaskDone: (isSecondTaskDone: boolean) => void;

  currentMood: null | Mood;
  setCurrentMood: (currentMood: Mood) => void;

  meditationListenedDays: string[];
  setMeditationListenedDays: (meditationListenedDays: string[]) => void;

  isAlreadyGreeted: boolean;
  setIsAlreadyGreeted: (isAlreadyGreeted: boolean) => void;

  moodIndexes: MoodIndex;
  increaseMoodIndex: (entity: Mood) => void;

  doneDays: string[];
  addDoneDay: (doneDay: string) => void;
  isAppAlreadyOpened: () => boolean;

  appOpenedDays: string[];
  addAppOpenedDay: (appOpenedDay: string) => boolean | void;

  totalListeningTime: number;
  setTotalListeningTime: (cb: (totalListeningTime: number) => number) => void;

  clear: () => void;
}

export const useUserStore = create(
  persist<State>(
    (set, get) => ({
      isFirstTaskDone: false,
      setIsFirstTaskDone: (isFirstTaskDone: boolean) => set({isFirstTaskDone}),

      isSecondTaskDone: false,
      setIsSecondTaskDone: (isSecondTaskDone: boolean) =>
        set({isSecondTaskDone}),

      currentMood: null,
      setCurrentMood: (currentMood: Mood) => set({currentMood}),

      meditationListenedDays: [],
      setMeditationListenedDays: (meditationListenedDays: string[]) =>
        set({meditationListenedDays}),

      isAlreadyGreeted: false,
      setIsAlreadyGreeted: (isAlreadyGreeted: boolean) =>
        set({isAlreadyGreeted}),

      moodIndexes: {
        [Mood.INSPIRED]: 0,
        [Mood.RELAXED]: 0,
        [Mood.STRESSED]: 0,
      },
      increaseMoodIndex: entity => {
        const moodIndexes = {...get().moodIndexes};
        moodIndexes[entity] = moodIndexes[entity] + 1;
        set({moodIndexes});
      },

      doneDays: [],
      addDoneDay: doneDay => {
        const doneDays = [...get().doneDays];
        if (doneDays.includes(doneDay)) return;

        doneDays.push(doneDay);
        set({doneDays});
      },

      appOpenedDays: [],
      addAppOpenedDay: appOpenedDay => {
        const appOpenedDays = [...get().appOpenedDays];
        if (appOpenedDays.includes(appOpenedDay)) return;
        appOpenedDays.push(appOpenedDay);
        set({appOpenedDays});

        return true;
      },

      isAppAlreadyOpened: () => {
        const appOpenedDays = get().appOpenedDays;
        const currentDate = new Date().toISOString().split('T')[0];
        return appOpenedDays.includes(currentDate);
      },

      totalListeningTime: 0,
      setTotalListeningTime: cb => {
        const totalListeningTime = cb(get().totalListeningTime);
        set({totalListeningTime});
      },

      clear: () => {
        set({
          isFirstTaskDone: false,
          isSecondTaskDone: false,
          currentMood: null,
        });
      },
    }),

    getPersistStoreOptions('user'),
  ),
);
