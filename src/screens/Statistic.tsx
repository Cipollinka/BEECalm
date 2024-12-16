import React from 'react';
import CustomText from '@/components/ui/Text';
import MainBackgroundWrapper from '@/components/layout/MainWrapper';
import BottomBlock from '@/components/layout/BottomBlock';
import {StyleSheet, View} from 'react-native';
import Row from '@/components/layout/Row';
import {useUserStore} from '@/stores/userStore';

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default function Statistic() {
  const moodIndexes = useUserStore(state => state.moodIndexes);
  const doneDays = useUserStore(state => state.doneDays);
  const totalListenedTime = useUserStore(state =>
    formatTime(state.totalListeningTime),
  );

  const totalLength =
    moodIndexes.relaxed + moodIndexes.inspired + moodIndexes.stressed;
  const totalWidth = 262;

  const relaxedWidth = totalWidth * (moodIndexes.relaxed / totalLength);
  const inspiredWidth = totalWidth * (moodIndexes.inspired / totalLength);
  const stressedWidth = totalWidth * (moodIndexes.stressed / totalLength);

  return (
    <MainBackgroundWrapper>
      <View style={{width: '100%', alignItems: 'center', marginTop: 24}}>
        <CustomText fs={22} fw="black" color="#fff">
          Statistics
        </CustomText>
      </View>

      <BottomBlock>
        <View style={{width: '100%', alignItems: 'center'}}>
          <CustomText fw="bold" fs={17}>
            Your mood tracker
          </CustomText>
          <Row gap={5} mt={16}>
            <View
              style={[
                styles.stat,
                {width: relaxedWidth, backgroundColor: '#F5A623'},
              ]}
            />
            <View
              style={[
                styles.stat,
                {width: inspiredWidth, backgroundColor: '#59BF00'},
              ]}
            />
            <View
              style={[
                styles.stat,
                {width: stressedWidth, backgroundColor: '#FF5757'},
              ]}
            />
          </Row>

          <View style={{width: '80%', marginTop: 16}}>
            <Row gap={5}>
              <View
                style={[styles.labelLegend, {backgroundColor: '#F5A623'}]}
              />
              <CustomText fw="bold" fs={17}>
                {Math.round((moodIndexes.relaxed / totalLength) * 100)}% -
                relaxed
              </CustomText>
            </Row>
            <Row gap={5}>
              <View
                style={[styles.labelLegend, {backgroundColor: '#59BF00'}]}
              />
              <CustomText fw="bold" fs={17}>
                {Math.round((moodIndexes.inspired / totalLength) * 100)}% -
                inspired
              </CustomText>
            </Row>
            <Row gap={5}>
              <View
                style={[styles.labelLegend, {backgroundColor: '#FF5757'}]}
              />
              <CustomText fw="bold" fs={17}>
                {Math.round((moodIndexes.stressed / totalLength) * 100)}% -
                stressed
              </CustomText>
            </Row>
          </View>

          <View style={{width: '82%', alignItems: 'center', marginTop: 24}}>
            <CustomText fw="bold" fs={17}>
              Your statistics
            </CustomText>

            <View
              style={{
                backgroundColor: '#FFE6A5',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 12,
                width: '100%',
                marginTop: 10,
              }}>
              <CustomText fw="bold" fs={42}>
                {totalListenedTime}
              </CustomText>
              <CustomText fw="bold" fs={17}>
                meditated
              </CustomText>
            </View>

            <Row
              style={{
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  backgroundColor: '#FFE6A5',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 12,
                  width: '46%',
                  marginTop: 10,
                }}>
                <CustomText fw="bold" fs={42}>
                  {doneDays.length}
                </CustomText>
                <CustomText fw="bold" fs={17}>
                  Tasks passed
                </CustomText>
              </View>

              <View
                style={{
                  backgroundColor: '#FFE6A5',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 12,
                  width: '46%',
                  marginTop: 10,
                }}>
                <CustomText fw="bold" fs={42}>
                  {totalLength}
                </CustomText>
                <CustomText fw="bold" fs={17}>
                  Days started
                </CustomText>
              </View>
            </Row>
          </View>
        </View>
      </BottomBlock>
    </MainBackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  stat: {
    height: 42,
    borderRadius: 8,
  },
  labelLegend: {
    width: 12,
    height: 12,
    borderRadius: 4,
  },
});
