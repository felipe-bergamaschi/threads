import { Image, View } from "react-native";
import { StyleSheet } from 'react-native';

interface Props {
  profileImage: string;
}

export function ColImage({ profileImage }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: profileImage }}
        style={styles.profileImage}
      />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    gap: 14,
    justifyContent: 'space-between'
  },

  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  }
});