import React, {useLayoutEffect} from 'react';
import CustomText from '@/components/default/Text';
import BottomBlock from '@/components/common/BottomBlock';
import MainWrapper from '@/components/common/MainWrapper';
import {TouchableOpacity, View} from 'react-native';
import Row from '@/components/common/Row';

import DayIcon from '@/content/icons/day.svg';
// import InspiredIcon from '@/content/icons/inspired.svg';
import CloudIcon from '@/content/icons/cloud.svg';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames, GlobalNavigationProp} from '@/models/navigation';
import Button from '@/components/default/Button';
import {useUserStore} from '@/stores/userStore';

import RelaxedIcon from '@/content/icons/relaxed.svg';
import InspiredIcon from '@/content/icons/inspired.svg';
import StressedIcon from '@/content/icons/stressed.svg';

import {Mood as MoodType} from '@/models';

const arr = [
  {Icon: DayIcon, key: MoodType.RELAXED},
  {Icon: RelaxedIcon, key: MoodType.INSPIRED},
  {Icon: CloudIcon, key: MoodType.STRESSED},
];

interface MoodButtonProps {
  Icon: any;
  onPress: () => void;
  color: string;
  isSelected: boolean;
}

const MoodButton = ({Icon, onPress, color, isSelected}: MoodButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: 84,
          height: 84,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 9999,
          backgroundColor: '#F1F1F1',
          borderWidth: 3,
          borderColor: isSelected ? color : '#F1F1F1',
        }}>
        <Icon color={isSelected ? color : 'black'} />
      </View>
    </TouchableOpacity>
  );
};

export default function Mood() {
  const nav = useNavigation<GlobalNavigationProp>();

  const currentMood = useUserStore(state => state.currentMood);
  const setCurrentMood = useUserStore(state => state.setCurrentMood);
  const increaseMoodIndex = useUserStore(state => state.increaseMoodIndex);
  // const setIsAlreadyGreeted = useUserStore(state => state.setIsAlreadyGreeted);

  const clear = useUserStore(state => state.clear);

  useLayoutEffect(() => {
    clear();
    // setIsAlreadyGreeted(false);
  }, []);

  const handleMeditationPress = (key: string) => {
    nav.navigate(ScreenNames.MEDITATION, {key});
  };

  const handleMoodSelect = (key: MoodType) => {
    setCurrentMood(key);
  };

  const handleDonePress = () => {
    if (!currentMood) return;

    increaseMoodIndex(currentMood);
    nav.replace(ScreenNames.MAIN);
  };

  return (
    <MainWrapper title="Quick Meditations" navDisabled>
      <Row
        style={{
          justifyContent: 'space-around',
          width: '90%',
          marginHorizontal: 'auto',
          marginTop: 25,
        }}>
        {arr.map(({Icon, key}) => (
          <TouchableOpacity
            onPress={() => handleMeditationPress(key)}
            key={key}>
            <View
              key={key}
              style={{
                backgroundColor: '#ffffff50',
                padding: 5,
                borderRadius: 9999,
              }}>
              <View
                style={{
                  borderRadius: 9999,
                  backgroundColor: '#fff',
                  width: 88,
                  height: 88,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="#F9BF2B" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </Row>

      <BottomBlock>
        <View style={{width: '100%', alignItems: 'center'}}>
          <CustomText fw="bold" fs={17}>
            Good Morning!
          </CustomText>
          <CustomText fw="bold" fs={26} mt={10}>
            How do you feel today?
          </CustomText>
          <View style={{alignItems: 'center', marginTop: 16}}>
            <Row style={{width: '80%', justifyContent: 'space-between'}}>
              <MoodButton
                Icon={RelaxedIcon}
                onPress={() => handleMoodSelect(MoodType.RELAXED)}
                color="#F9BF2B"
                isSelected={currentMood === MoodType.RELAXED}
              />
              <MoodButton
                Icon={InspiredIcon}
                onPress={() => handleMoodSelect(MoodType.INSPIRED)}
                color="#59BF00"
                isSelected={currentMood === MoodType.INSPIRED}
              />
            </Row>

            <MoodButton
              Icon={StressedIcon}
              onPress={() => handleMoodSelect(MoodType.STRESSED)}
              color="#FF5757"
              isSelected={currentMood === MoodType.STRESSED}
            />
          </View>

          <View style={{marginVertical: 10}}>
            <Button
              isFullWidth
              disabled={!currentMood}
              title="Start your day"
              onPress={handleDonePress}
            />
          </View>
        </View>
      </BottomBlock>
    </MainWrapper>
  );
}
