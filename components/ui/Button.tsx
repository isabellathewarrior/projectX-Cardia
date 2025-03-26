import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import clsx from 'clsx';
import type { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
}

export default function Button({
  title,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const base = 'flex-row justify-center items-center rounded-xl transition-opacity active:opacity-80';

  const variantStyles: Record<string, string> = {
    primary: 'bg-blue-600 text-white dark:bg-blue-500',
    secondary: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white',
    outline: 'border border-blue-600 text-blue-600 bg-transparent dark:border-blue-400 dark:text-blue-400',
    danger: 'bg-red-600 text-white dark:bg-red-500',
    ghost: 'bg-transparent text-gray-600 dark:text-gray-300',
  };

  const sizeStyles: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  const isDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      {...props}
      disabled={isDisabled}
      className={clsx(
        base,
        variantStyles[variant],
        sizeStyles[size],
        isDisabled && 'opacity-50' // Disabled durumda butonun şeffaf olmasını sağlıyoruz
      )}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? '#666' : '#fff'}
        />
      ) : (
        <Text
          className={clsx(
            'font-semibold',
            variant === 'outline' && 'text-blue-600 dark:text-blue-400',
            variant === 'ghost' && 'text-gray-600 dark:text-gray-300'
          )}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
