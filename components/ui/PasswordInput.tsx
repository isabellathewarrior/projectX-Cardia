import { useState } from 'react';
import { TextInputProps, View, TouchableOpacity, Text } from 'react-native';
import Input from './Input';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
}

export default function PasswordInput({ label, error, ...props }: Props) {
  const [secure, setSecure] = useState(true);

  return (
    <View className="relative">
      <Input
        label={label}
        error={error}
        secureTextEntry={secure}
        {...props}
      />
      <TouchableOpacity
        onPress={() => setSecure(!secure)}
        className="absolute right-3 top-11"
      >
        <Text className="text-sm text-blue-500">
          {secure ? 'Göster' : 'Gizle'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
