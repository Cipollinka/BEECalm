import React from 'react';
import Wrapper from '@/components/common/Wrapper';
import CustomText from '@/components/default/Text';
import {Image, View} from 'react-native';
import BottomBlock from '@/components/common/BottomBlock';
import Button from '@/components/default/Button';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames, GlobalNavigationProp} from '@/models/navigation';

export default function AfterGreetings() {
  const nav = useNavigation<GlobalNavigationProp>();

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
            onPress={() => nav.replace(ScreenNames.INSPIRE)}
          />
        </View>
      </BottomBlock>
    </Wrapper>
  );
}
