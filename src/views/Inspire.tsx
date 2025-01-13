import React, {useLayoutEffect} from 'react';
import Wrapper from '@/components/common/Wrapper';
import CustomText from '@/components/default/Text';
import {Image, View} from 'react-native';
import BottomBlock from '@/components/common/BottomBlock';
import Button from '@/components/default/Button';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames, GlobalNavigationProp} from '@/models/navigation';
import {useUserStore} from '@/stores/userStore';

export default function GetInspired() {
  const nav = useNavigation<GlobalNavigationProp>();
  const setIsAlreadyGreeted = useUserStore(state => state.setIsAlreadyGreeted);

  useLayoutEffect(() => {
    setIsAlreadyGreeted(true);
  }, [setIsAlreadyGreeted]);

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
          <Button title="Start" onPress={() => nav.replace(ScreenNames.MOOD)} />
        </View>
      </BottomBlock>
    </Wrapper>
  );
}
