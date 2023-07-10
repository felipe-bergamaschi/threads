import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';
import { Icon } from '@/components/icon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" fill={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <Icon name="search" stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="newThread"
        options={{
          tabBarIcon: ({ color }) => <Icon name="newThread" stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name='favorite'
              fill={focused ? color : 'none'}
              stroke={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name='person'
              fill={focused ? color : 'none'}
              stroke={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
