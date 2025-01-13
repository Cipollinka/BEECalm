import React from 'react';
import MainWrapper from '@/components/common/MainWrapper';
import CustomText from '@/components/default/Text';
import BottomBlock from '@/components/common/BottomBlock';
import {Image, ScrollView, View} from 'react-native';

import topics from '@/constants/topics.json';
import {GlobalNavigationProp} from '@/models/navigation';
import {useNavigation} from '@react-navigation/native';
import Button from '@/components/default/Button';

export default function TopicsDetails({route}: {route: any}) {
  const nav = useNavigation<GlobalNavigationProp>();

  const id = route.params.id;

  const currentTopic = topics.find(item => item.id === id);

  return (
    <MainWrapper>
      <View style={{marginTop: 20}} />
      <BottomBlock>
        <View style={{width: '100%', alignItems: 'center'}}>
          <ScrollView
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal: 'auto'}}>
              <CustomText fw="bold" fs={17} style={{marginBottom: 16}}>
                Reading
              </CustomText>
            </View>
            <View style={{gap: 8, marginTop: 16}}>
              <CustomText fw="bold" fs={17}>
                {currentTopic?.title}
              </CustomText>

              <CustomText fs={15}>{currentTopic?.description}</CustomText>
            </View>
            <View
              style={{
                width: '100%',
                marginTop: 20,
                alignItems: 'baseline',
                marginBottom: 100,
              }}>
              <Button
                title="Close"
                onPress={() => nav.goBack()}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 50,
                  borderRadius: 8,
                }}
              />
            </View>
          </ScrollView>
        </View>
      </BottomBlock>
    </MainWrapper>
  );
}
