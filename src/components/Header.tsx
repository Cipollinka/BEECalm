import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Row from './layout/Row';
import {useNavigation} from '@react-navigation/native';
import {Screens, UseNavigationProp} from '@/types/navigation';
import StatisticIcon from '@/assets/icons/statistic.svg';
import TopicsIcon from '@/assets/icons/topics.svg';

interface Props {
  disabled?: boolean;
}

export default function Header({disabled}: Props) {
  const nav = useNavigation<UseNavigationProp>();

  return (
    <Row
      style={{
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 50,
        zIndex: 20,
      }}>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => nav.navigate(Screens.TOPICS_OVERVIEW)}>
        <View style={styles.item}>
          <TopicsIcon />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={disabled}
        onPress={() => nav.navigate(Screens.MAIN)}>
        <Image
          source={require('@/assets/images/logotext.png')}
          style={{width: 165, height: 38}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={disabled}
        onPress={() => nav.navigate(Screens.STATISTIC)}>
        <View style={styles.item}>
          <StatisticIcon />
        </View>
      </TouchableOpacity>
    </Row>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 6,
  },
});
