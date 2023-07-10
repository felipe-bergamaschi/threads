import { Icon } from "@/components/icon";
import { TouchableOpacity, View } from "react-native";

export function ThreadActions() {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10
      }}
    >
      <TouchableOpacity>
        <Icon name='favoriteOutline' fill='white' />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name='messageOutline' fill='white' />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name='repostOutline' fill='white' />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name='sendOutline' fill='white' />
      </TouchableOpacity>
    </View>
  )
}