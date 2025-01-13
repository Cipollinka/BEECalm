import React from 'react';
import {SafeAreaView, View} from 'react-native';

interface Props {
  children: React.ReactNode;
}

export default function Wrapper({children}: Props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F9BF2B',
        position: 'relative',
      }}>
      {children}

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
    </SafeAreaView>
  );
}
