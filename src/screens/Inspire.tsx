import React, {useLayoutEffect} from 'react';
import BackgroundWrapper from '@/components/layout/Wrapper';
import CustomText from '@/components/ui/Text';
import {Image, View} from 'react-native';
import BottomBlock from '@/components/layout/BottomBlock';
import Button from '@/components/ui/Button';
import {useNavigation} from '@react-navigation/native';
import {Screens, UseNavigationProp} from '@/types/navigation';
import BeIcon from '@/assets/icons/be.svg';
import {useUserStore} from '@/stores/userStore';

export default function GetInspired() {
  const nav = useNavigation<UseNavigationProp>();
  const setIsAlreadyGreeted = useUserStore(state => state.setIsAlreadyGreeted);

  useLayoutEffect(() => {
    setIsAlreadyGreeted(true);
  }, [setIsAlreadyGreeted]);

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
            marginTop: 50,
          }}
        />
      </View>

      {/* <View style={{marginTop: 30}} /> */}
      <BottomBlock style={{alignItems: 'center'}}>
        <BeIcon />

        <View
          style={{
            borderRadius: 500,
            paddingHorizontal: 30,
            paddingVertical: 5,
            backgroundColor: '#FFEAB5',
            marginTop: 5,
          }}>
          <CustomText fw="bold">3/3</CustomText>
        </View>

        <CustomText fw="bold" fs={26} mt={14}>
          Get Inspired
        </CustomText>

        <CustomText mt={14} align="center">
          Receive daily quotes to inspire positivity and inner calm, guiding you
          towards a peaceful and mindful day.
        </CustomText>

        <View
          style={{
            width: '80%',
            marginHorizontal: 'auto',
            marginTop: 30,
            marginBottom: 30,
          }}>
          <Button title="Start" onPress={() => nav.replace(Screens.MOOD)} />
        </View>
      </BottomBlock>
    </BackgroundWrapper>
  );
}
