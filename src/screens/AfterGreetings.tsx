import React from 'react';
import BackgroundWrapper from '@/components/layout/Wrapper';
import CustomText from '@/components/ui/Text';
import {Image, View} from 'react-native';
import BottomBlock from '@/components/layout/BottomBlock';
import Button from '@/components/ui/Button';
import {useNavigation} from '@react-navigation/native';
import {Screens, UseNavigationProp} from '@/types/navigation';
import BeeIcon from '@/assets/icons/bee.svg';

export default function AfterGreetings() {
  const nav = useNavigation<UseNavigationProp>();

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
          <CustomText fw="bold">2/3</CustomText>
        </View>

        <CustomText fw="bold" fs={26} mt={14}>
          Track Your Mood
        </CustomText>

        <CustomText mt={14} align="center">
          Log your daily mood with a simple touch, helping you keep track of
          your emotional well-being and reflect on your feelings.
        </CustomText>

        <View
          style={{
            width: '80%',
            marginHorizontal: 'auto',
            marginTop: 30,
            marginBottom: 30,
          }}>
          <Button
            title="Continue"
            onPress={() => nav.replace(Screens.INSPIRE)}
          />
        </View>
      </BottomBlock>
    </BackgroundWrapper>
  );
}
