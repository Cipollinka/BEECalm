import React, {useLayoutEffect} from 'react';
import Wrapper from '@/components/common/Wrapper';
import CustomText from '@/components/default/Text';
import {Image, View} from 'react-native';
import BottomBlock from '@/components/common/BottomBlock';
import Button from '@/components/default/Button';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames, GlobalNavigationProp} from '@/models/navigation';
import {useUserStore} from '@/stores/userStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Greetings() {
  const nav = useNavigation<GlobalNavigationProp>();
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

    if (!isAlreadyGreeted) {
      return;
    } else if (isAppAlreadyOpened() && currentMood) {
      nav.navigate(ScreenNames.MAIN);
      return;
    }
    nav.navigate(ScreenNames.MOOD);
  };

  return (
    <Wrapper>
      <View style={{width: '100%'}}>
        <Image
          source={require('@/content/images/logo.png')}
          style={{
            width: '100%',
            height: 280,
            marginHorizontal: 'auto',
            objectFit: 'contain',
            marginTop: 50,
            // paddingTop: 200,
          }}
        />
      </View>

      {/* <View style={{marginTop: 30}} /> */}
      <BottomBlock style={{alignItems: 'center'}}>
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
            onPress={() => nav.replace(ScreenNames.AFTER_GREETINGS)}
          />
        </View>
      </BottomBlock>
    </Wrapper>
  );
}
