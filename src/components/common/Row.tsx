import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

interface RowProps {
  children: React.ReactNode;
  gap?: number;
  mt?: number;
  style?: StyleProp<ViewStyle>;
}

const Row: React.FC<RowProps> = ({children, gap = 0, mt = 0, style}) => {
  const rowStyle: ViewStyle = {
    flexDirection: 'row',
    gap,
    alignItems: 'center',
    marginTop: mt,
  };

  return <View style={[rowStyle, style]}>{children}</View>;
};

export default Row;
