import React from 'react';
import {Text, StyleSheet, TextStyle, StyleProp} from 'react-native';

const fontWeights = {
  regular: 'Nunito-Regular',
  bold: 'Nunito-Bold',
  semibold: 'Nunito-SemiBold',
  black: 'Nunito-Black',
  medium: 'Nunito-Medium',
  light: 'Nunito-Light',
};

const CustomText = ({
  style,
  fw = 'regular',
  fs = 16,
  align = 'left',
  mt,
  color,
  ...props
}: {
  style?: StyleProp<TextStyle>;
  fw?: keyof typeof fontWeights;
  fs?: number;
  align?: 'left' | 'center' | 'right' | 'justify';
  mt?: number;
  color?: string;
  children: React.ReactNode;
}) => {
  return (
    <Text
      style={[
        styles.text,
        style,
        {
          fontFamily: fontWeights[fw],
          fontSize: fs || 16,
          textAlign: align,
          marginTop: mt || 0,
          color: color || styles.text.color,
        },
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});

export default CustomText;
