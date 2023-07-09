import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';

type Props = {
  children: React.ReactNode;
}

export function CommonLayout({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />

      {children}
    </SafeAreaView>
  );
}