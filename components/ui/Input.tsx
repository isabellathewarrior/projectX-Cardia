import { TextInput as RNTextInput, Text, View, TextInputProps } from 'react-native';
import clsx from 'clsx';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <View className="w-full mb-4">
      {label && <Text className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</Text>}
      <RNTextInput
        {...props}
        className={clsx(
          'bg-white dark:bg-gray-800 border rounded-xl px-4 py-3 text-base text-gray-900 dark:text-white',
          error
            ? 'border-red-500'
            : 'border-gray-300 dark:border-gray-600',
          props.editable === false && 'opacity-50'
        )}
        placeholderTextColor={props.placeholderTextColor || '#9CA3AF'}
      />
      {error && <Text className="text-sm text-red-500 mt-1">{error}</Text>}
    </View>
  );
}
