import React from 'react';
import BackgroundWrapper from '@/components/layout/Wrapper';
import Container from '@/components/layout/Container';
import CustomText from '@/components/ui/Text';
import MainBackgroundWrapper from '@/components/layout/MainWrapper';
import BottomBlock from '@/components/layout/BottomBlock';
import {Image, ScrollView, View} from 'react-native';

import topics from '@/constants/topics.json';
import {UseNavigationProp} from '@/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {TOPICS_IMAGES} from '@/constants';
import Button from '@/components/ui/Button';

export default function TopicsDetails({route}: {route: any}) {
  const nav = useNavigation<UseNavigationProp>();

  const id = route.params.id;

  const currentTopic = topics.find(item => item.id === id);

  return (
    <MainBackgroundWrapper>
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
            <Image
              source={TOPICS_IMAGES[currentTopic.id]}
              style={{width: '100%', height: 173, borderRadius: 14}}
            />
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
    </MainBackgroundWrapper>
  );
}
