import React, {useEffect, useState} from 'react';
import CustomText from '@/components/default/Text';
import MainWrapper from '@/components/common/MainWrapper';
import BottomBlock from '@/components/common/BottomBlock';
import {useUserStore} from '@/stores/userStore';
import {MOODS} from '@/constants';
import {Mood} from '@/models';
import {ScrollView, View} from 'react-native';
import Button from '@/components/default/Button';
import Task from '@/components/Task';

import agenda from '@/constants/tasks.json';
import {ScreenNames, GlobalNavigationProp} from '@/models/navigation';
import {useNavigation} from '@react-navigation/native';

export default function Main() {
  const nav = useNavigation<GlobalNavigationProp>();
  const [data, setData] = useState(null);
  const currentMood = useUserStore(state => state.currentMood) as Mood;
  const moodIndex = useUserStore(
    state => state.moodIndexes[state.currentMood as Mood],
  );
  const isFirstTaskDone = useUserStore(state => state.isFirstTaskDone);
  const isSecondTaskDone = useUserStore(state => state.isSecondTaskDone);

  const setIsFirstTaskDone = useUserStore(state => state.setIsFirstTaskDone);
  const setIsSecondTaskDone = useUserStore(state => state.setIsSecondTaskDone);

  const addDoneDay = useUserStore(state => state.addDoneDay);

  const isMeditationDisabled =
    !currentMood || !isFirstTaskDone || !isSecondTaskDone;

  useEffect(() => {
    init();
  }, [currentMood]);

  useEffect(() => {
    if (!isSecondTaskDone) return;

    addDoneDay(new Date().toISOString().split('T')[0]);
  }, [isSecondTaskDone]);

  const init = () => {
    if (!currentMood) return;
    const moodData = MOODS[currentMood];
    const currentAgenda = agenda[currentMood];

    const currentQuote = currentAgenda.quotes[moodIndex % 5];
    const currentTask = currentAgenda.tasks[moodIndex % 5];

    setData({
      Icon,
      currentAgenda,
      currentQuote,
      currentTask,
      moodData,
    });
  };

  // const handleMeditationPress = () => {
  //   nav.navigate(ScreenNames.MEDITATION, {key: currentMood});
  // };

  const Icon = currentMood ? data?.moodData?.Icon : null;

  if (!data || !currentMood) {
    return (
      <View>
        <CustomText fw="black" fs={22} color="#fff">
          Youre feeling loading
        </CustomText>
      </View>
    );
  }

  return (
    <MainWrapper>
      <View
        style={{width: '100%', alignItems: 'center', gap: 6, marginTop: 24}}>
        <CustomText fw="black" fs={22} color="#fff">
          Youre feeling {data?.moodData?.label}
        </CustomText>
        <View
          style={{backgroundColor: '#fff', padding: 16, borderRadius: 9999}}>
          {Icon && <Icon color={data?.moodData?.color} />}
        </View>
      </View>

      <View style={{marginTop: 20}} />
      <BottomBlock>
        <ScrollView
          style={{width: '100%', height: '100%'}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{width: '100%', alignItems: 'center', marginBottom: 200}}>
            <CustomText fw="bold" fs={17}>
              Start your day:
            </CustomText>
            <View
              style={{
                marginTop: 26,
                gap: 20,
                width: '100%',
                position: 'relative',
              }}>
              <View
                style={{
                  position: 'absolute',
                  width: 1,
                  height: 170,
                  borderWidth: 1,
                  borderColor: '#F9BF2B',
                  borderStyle: 'dashed',
                  top: 40,
                  left: 20,
                }}
              />
              <Task
                isFirst
                isDone={isFirstTaskDone}
                setIsDone={setIsFirstTaskDone}
                text={data?.currentQuote?.text}
                author={data?.currentQuote?.author}
              />

              <Task
                text={data?.currentTask}
                isDone={isSecondTaskDone}
                setIsDone={setIsSecondTaskDone}
              />
            </View>
            <View style={{marginTop: 16, marginBottom: 50}}>
              <Button
                isFullWidth
                disabled={isMeditationDisabled}
                title={
                  isMeditationDisabled
                    ? 'Do your task firstly'
                    : 'Come back tomorrow!'
                }
                onPress={() => {}}
              />
            </View>
          </View>
        </ScrollView>
      </BottomBlock>
    </MainWrapper>
  );
}
