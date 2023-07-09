import { View } from 'react-native';
import { styles } from './styles'
import { Icon } from '@/components/icon';
import { styleGuide } from '@/theme/styleGuide';

export function CommonHeader() {
  return (
    <View style={styles.container}>
      <Icon name="logo" fill="#fff" size={styleGuide.size.md} />
    </View>
  );
}