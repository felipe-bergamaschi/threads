import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

import HomeIcon from '../../assets/svg/home.svg';
import { CommonLayout } from '@/components/layout/common';
import { Header } from '@/components/header';
import { ITheadProps, Thread } from '@/components/thread';
import { faker } from '@faker-js/faker';

export default function TabOneScreen() {
  const username = faker.person.fullName();
  const paragraphs = faker.lorem.paragraphs();

  const profileImage = faker.image.avatar();

  const threads: ITheadProps[] = [
    {
      id: 'string',
      username,
      profileImage,
      thread: {
        id: 'string',
        image: 'string',
        text: paragraphs,
        createdAt: 'string',
        likes: 12,
        replies: 12,
        repliesImage: ['string'],
        reThread: true
      }
    }
  ]

  return (
    <CommonLayout>
      <Header.Common />

      {threads.map((thread) => (
        <Thread key={thread.id} {...thread} />
      ))}

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
