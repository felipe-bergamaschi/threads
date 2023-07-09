import { Text as DefaultText } from 'react-native';

import { useTheme } from '@/theme/useTheme';

type ThemeProps = {
  variant: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary';
  weight?: 'normal' | 'bold';
};

export type TextProps = ThemeProps & DefaultText['props'];

export function Text(props: TextProps) {
  const { style, weight, ...otherProps } = props;

  function getVariant() {
    switch (props.variant) {
      case 'small':
        return 14;
      case 'medium':
        return 16;
      case 'large':
        return 18;
    }
  }

  function getColor() {
    switch (props.color) {
      case 'primary':
        return {
          light: '#000',
          dark: '#fff',
        };
      case 'secondary':
        return {
          light: 'rgba(0,0,0,.5)',
          dark: 'rgba(255,255,255,.5)',
        };
    }
  }

  const color = useTheme({
    light: getColor().light,
    dark: getColor().dark
  }, 'text');

  return (
    <DefaultText
      style={[{
        color,
        fontSize: getVariant(),
        fontWeight: weight ?? 'normal',
      }, style]}
      {...otherProps}
    />
  )
}
