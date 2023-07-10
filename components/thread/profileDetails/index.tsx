import { View, Image, TouchableOpacity } from "react-native";
import { faker } from '@faker-js/faker';

import { Text } from "../../text";
import { Icon } from "../../icon";
import { styles } from "./styles";

interface IProfileDetailsProps {
  profileImage: string;
  username: string;
  createdAt: string;
  children: React.ReactNode;
}

// 14

// 32
// 42

export function ProfileDetails({ profileImage, username, children, createdAt }: IProfileDetailsProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: profileImage }}
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          marginTop: 14,
          marginLeft: 14,
        }}
      />

      <View style={styles.content}>
        <Text variant="medium" color="primary" weight="bold">
          {username}
        </Text>

        {children}
        {/* 
        <Text
          variant="medium"
          color="primary"
          lineHeight={1.4}
          numberOfLines={1}
        >
          {paragraphs}
        </Text> */}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          // backgroundColor: '#333',
        }}
      >
        <Text variant="small" color="secondary" style={{ marginTop: 14 }}>
          14h
        </Text>

        <TouchableOpacity
          style={{
            width: 42,
            height: 42,
            borderRadius: 22,
            backgroundColor: '#333',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon name="moreHoriz" fill="#fff" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  )
}