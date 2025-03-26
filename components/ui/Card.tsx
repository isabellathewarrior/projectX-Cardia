import { View, ViewProps } from 'react-native';
import clsx from 'clsx';

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <View
      {...props}
      className={clsx(
        'bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-md border border-gray-100 dark:border-gray-700',
        className
      )}
    >
      {children}
    </View>
  );
}
