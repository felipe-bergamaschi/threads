import { View } from "react-native";
import { faker } from '@faker-js/faker';
import { StyleSheet } from 'react-native';

// import { styles } from './styles'
import { ProfileDetails } from "./profileDetails";
import { Text } from "../text";
import { ColImage } from "./colImage";
import { PostDetails } from "./post";

export interface ITheadProps {
  id: string;
  username: string;
  profileImage: string;
  thread: {
    id: string;
    image: string;
    text: string;
    createdAt: string;
    likes: number;
    replies: number;
    repliesImage: string[];
    reThread: boolean;
  }
}

export function Thread(props: ITheadProps) {
  const { username, profileImage, thread } = props;

  return (
    <View style={styles.container}>
      <View>
        <Text variant='small' color='secondary'>
          republished
        </Text>
      </View>

      <View style={styles.content}>
        <ColImage profileImage={profileImage} />

        <PostDetails
          username={username}
          postMessage={thread.text}
          postImage={thread.image}
        />
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,.08)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,.2)',
    padding: 14,
    gap: 8,
  },

  content: {
    flexDirection: 'row',
    gap: 14,
  }
});