import React from 'react';
import CustomText from '@/components/default/Text';
import MainWrapper from '@/components/common/MainWrapper';
import BottomBlock from '@/components/common/BottomBlock';
import {Image, ScrollView, View} from 'react-native';

import topics from '@/constants/topics.json';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames, GlobalNavigationProp} from '@/models/navigation';
import Button from '@/components/default/Button';

export default function TopicsOverview() {
  const nav = useNavigation<GlobalNavigationProp>();

  return (
    <MainWrapper>
      <View style={{marginTop: 20}} />
      <BottomBlock>
        <View
          style={{
            width: '95%',
            alignItems: 'center',
            marginHorizontal: 'auto',
          }}>
          <CustomText fw="bold" fs={17}>
            Motivational stories
          </CustomText>

          <ScrollView
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}>
            <View style={{gap: 20, marginTop: 20, marginBottom: 150}}>
              {topics.map(item => (
                <View
                  key={item.id}
                  style={{
                    borderRadius: 10,
                    backgroundColor: '#F1F1F1',
                    overflow: 'hidden',
                  }}>
                  <View style={{padding: 20, gap: 10}}>
                    <CustomText fw="bold" fs={17}>
                      {item.title}
                    </CustomText>
                    <View>
                      <Button
                        style={{
                          width: 140,
                          paddingVertical: 8,
                          borderRadius: 8,
                        }}
                        title="Read now"
                        onPress={() =>
                          nav.navigate(ScreenNames.TOPICS_DETAILS, {
                            id: item.id,
                          })
                        }
                      />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </BottomBlock>
    </MainWrapper>
  );
}
