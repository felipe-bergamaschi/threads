import { styleGuide } from '@/theme/styleGuide';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 14,
  },

  content: {
    flex: 1,
    marginTop: styleGuide.spacing.sm,
  }
});