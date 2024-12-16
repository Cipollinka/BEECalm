import React from 'react';
import CustomText from '@/components/ui/Text';
import MainBackgroundWrapper from '@/components/layout/MainWrapper';
import BottomBlock from '@/components/layout/BottomBlock';
import {View} from 'react-native';
import {MOODS} from '@/constants';
import {Mood} from '@/types';
import {useUserStore} from '@/stores/userStore';
import Button from '@/components/ui/Button';
import {Screens, UseNavigationProp} from '@/types/navigation';
import {useNavigation} from '@react-navigation/native';

export default function EndMeditation() {
  const nav = useNavigation<UseNavigationProp>();

  const currentMood = useUserStore(state => state.currentMood) as Mood;
  const moodData = MOODS[currentMood];
  const Icon = currentMood ? moodData?.Icon : null;

  return (
    <MainBackgroundWrapper>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          gap: 6,
          marginTop: 24,
          maxWidth: 300,
          marginHorizontal: 'auto',
        }}>
        <CustomText fw="black" fs={22} color="#fff" align="center">
          Youre successfully passed all steps
        </CustomText>
        <View
          style={{backgroundColor: '#fff', padding: 16, borderRadius: 9999}}>
          {Icon && <Icon color={moodData?.color} />}
        </View>
      </View>

      <View style={{marginTop: 20}} />
      <BottomBlock>
        <View style={{width: '100%', alignItems: 'center', marginBottom: 200}}>
          <CustomText fw="bold" fs={17} mt={10}>
            See you tomorrow!
          </CustomText>
          <View style={{gap: 15, marginTop: 26}}>
            <Button
              isFullWidth
              title="Homepage"
              onPress={() => nav.navigate(Screens.MAIN)}
            />
            <Button
              isFullWidth
              title="Read motivational stories"
              onPress={() => nav.navigate(Screens.TOPICS_OVERVIEW)}
            />
          </View>
        </View>
      </BottomBlock>
    </MainBackgroundWrapper>
  );
}
