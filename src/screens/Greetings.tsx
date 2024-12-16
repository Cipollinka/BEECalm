import React, {useLayoutEffect} from 'react';
import BackgroundWrapper from '@/components/layout/Wrapper';
import CustomText from '@/components/ui/Text';
import {Image, View} from 'react-native';
import BottomBlock from '@/components/layout/BottomBlock';
import Button from '@/components/ui/Button';
import {useNavigation} from '@react-navigation/native';
import {Screens, UseNavigationProp} from '@/types/navigation';
import {useUserStore} from '@/stores/userStore';
import BeeIcon from '@/assets/icons/bee.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Greetings() {
  const nav = useNavigation<UseNavigationProp>();
  const isAlreadyGreeted = useUserStore(state => state.isAlreadyGreeted);
  const isAppAlreadyOpened = useUserStore(state => state.isAppAlreadyOpened);

  useLayoutEffect(() => {
    init();
  }, [isAlreadyGreeted]);

  const init = async () => {
    const currentMoodJSON = await AsyncStorage.getItem('user');

    const currentMood = currentMoodJSON
      ? JSON.parse(currentMoodJSON)?.state?.currentMood
      : null;
    console.log('========================');
    console.log('currentMood', currentMood);
    console.log('isAppAlreadyOpened()', isAppAlreadyOpened());
    console.log('========================');

    if (!isAlreadyGreeted) {
      return;
    } else if (isAppAlreadyOpened() && currentMood) {
      nav.navigate(Screens.MAIN);
      return;
    }
    nav.navigate(Screens.MOOD);
  };

  return (
    <BackgroundWrapper>
      <View style={{width: '100%'}}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={{
            width: '100%',
            height: 280,
            marginHorizontal: 'auto',
            objectFit: 'contain',
          }}
        />
      </View>

      <View style={{marginTop: 30}} />
      <BottomBlock style={{alignItems: 'center'}}>
        <BeeIcon />

        <View
          style={{
            borderRadius: 500,
            paddingHorizontal: 30,
            paddingVertical: 5,
            backgroundColor: '#FFEAB5',
            marginTop: 5,
          }}>
          <CustomText fw="bold">1/3</CustomText>
        </View>

        <CustomText fw="bold" fs={26} mt={14}>
          Choose Your Sound
        </CustomText>

        <CustomText mt={14} align="center">
          Select from a variety of calming nature sounds like ocean waves, rain,
          or birds chirping to create your perfect relaxing atmosphere.
        </CustomText>

        <View
          style={{
            width: '80%',
            marginHorizontal: 'auto',
            marginTop: 30,
            marginBottom: 30,
          }}>
          <Button
            title="Start now"
            onPress={() => nav.replace(Screens.AFTER_GREETINGS)}
          />
        </View>
      </BottomBlock>
    </BackgroundWrapper>
  );
}
