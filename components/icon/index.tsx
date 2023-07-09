import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export function Icon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={28} {...props} />;
}