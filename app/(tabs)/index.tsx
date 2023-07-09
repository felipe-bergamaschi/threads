import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

import HomeIcon from '../../assets/svg/home.svg';
import { CommonLayout } from '@/components/layout/common';

export default function TabOneScreen() {
  return (
    <CommonLayout>
      <Text style={styles.title}>Home</Text>
      <HomeIcon width={24} height={24} fill={'#ccc'} />
    </CommonLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
