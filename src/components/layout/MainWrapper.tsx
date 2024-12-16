import React, {useEffect} from 'react';
import {AppState, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../Header';
import CustomText from '../ui/Text';
import {useUserStore} from '@/stores/userStore';
import {useNavigation} from '@react-navigation/native';
import {Screens, UseNavigationProp} from '@/types/navigation';

interface Props {
  children: React.ReactNode;
  title?: string;
  navDisabled?: boolean;
  bottomBlock?: boolean;
}

export default function MainBackgroundWrapper({
  children,
  title,
  navDisabled,
  bottomBlock,
}: Props) {
  const nav = useNavigation<UseNavigationProp>();
  const clear = useUserStore(state => state.clear);
  const addAppOpenedDay = useUserStore(state => state.addAppOpenedDay);

  useEffect(() => {
    const currentDay = new Date().toISOString().split('T')[0];
    const isNewDay = addAppOpenedDay(currentDay);
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        const isNewDayInner = addAppOpenedDay(currentDay);
        if (isNewDayInner) {
          clear();
          nav.replace(Screens.MOOD);
        }
      }
    });
    if (isNewDay) {
      clear();
      nav.replace(Screens.MOOD);
    }
    return () => subscription.remove();
  }, [addAppOpenedDay]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F9BF2B',
        position: 'relative',
      }}>
      <Header disabled={navDisabled} />

      {title && (
        <CustomText
          fw="black"
          fs={22}
          color="#fff"
          mt={31}
          style={{zIndex: 10, marginHorizontal: 'auto'}}>
          {title}
        </CustomText>
      )}

      <Image
        style={[
          StyleSheet.absoluteFill,
          {
            width: '100%',
            height: '100%',
            paddingBottom: -16,
            transform: [{translateY: -28}],
          },
        ]}
        source={require('@/assets/images/wrapper.png')}
      />
      {children}

      {!bottomBlock && (
        <View
          style={{
            backgroundColor: '#fff',
            height: 40,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      )}
    </SafeAreaView>
  );
}
