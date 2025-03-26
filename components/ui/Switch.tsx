import { Switch as RNSwitch, View, Text } from 'react-native';
import { useState } from 'react';

export default function Switch({ label }: { label: string }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <View className="flex-row items-center justify-between my-2">
      <Text className="text-base text-gray-700 dark:text-gray-200">{label}</Text>
      <RNSwitch
        value={isOn}
        onValueChange={setIsOn}
        thumbColor={isOn ? '#2563EB' : '#9CA3AF'}
        trackColor={{ false: '#D1D5DB', true: '#93C5FD' }}
      />
    </View>
  );
}
