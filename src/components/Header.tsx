import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Row from './common/Row';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames, GlobalNavigationProp} from '@/models/navigation';
import StatisticIcon from '@/content/icons/statistic.svg';
import TopicsIcon from '@/content/icons/topics.svg';

interface Props {
  disabled?: boolean;
}

export default function Header({disabled}: Props) {
  const nav = useNavigation<GlobalNavigationProp>();

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
        onPress={() => nav.navigate(ScreenNames.TOPICS_OVERVIEW)}>
        <View style={styles.item}>
          <TopicsIcon />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={disabled}
        onPress={() => nav.navigate(ScreenNames.MAIN)}>
        <Image
          source={require('@/content/images/logotext.png')}
          style={{width: 165, height: 38}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={disabled}
        onPress={() => nav.navigate(ScreenNames.STATISTIC)}>
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
