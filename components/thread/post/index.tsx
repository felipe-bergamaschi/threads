import { Text } from "@/components/text";
import { Image, View } from "react-native";

interface IPostDetailsProps {
  username: string;
  postMessage: string;
  postImage: string;
}

export function PostDetails({ username, postMessage, postImage }: IPostDetailsProps) {
  return (
    <View
      style={{
        flex: 1,
        gap: 8,
      }}
    >
      <Text variant="medium" color="primary" weight="bold">
        {username}
      </Text>

      <Text variant="medium" color="primary" lineHeight={1.4} numberOfLines={2}>
        {postMessage}
      </Text>

      <Image
        source={{ uri: postImage }}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 8,
          objectFit: 'cover',
        }}
      />
    </View>
  )
}