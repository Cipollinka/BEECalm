import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import CustomText from './Text';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title?: string;
  onPress: () => void;
  variant?: 'done' | 'default';
  style?: StyleProp<ViewStyle>;
  isFullWidth?: boolean;
  fs?: number;
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  title,
  onPress,
  style,
  fs,
  icon,
  iconAfter,
  isFullWidth,
  disabled,
}: Props) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={[
          styles.default,
          {
            width: isFullWidth ? '100%' : 'auto',
            opacity: disabled ? 0.5 : 1,
          },
          style,
        ]}>
        {!!icon && icon}
        {title && (
          <CustomText
            fw="bold"
            fs={fs || 16}
            style={{fontSize: fs || 16, zIndex: 20}}>
            {title}
          </CustomText>
        )}
        {iconAfter && iconAfter}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pulseContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  default: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 14,
    backgroundColor: '#F9BF2B',
    gap: 4,
  },
});