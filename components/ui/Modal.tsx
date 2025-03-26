import { Modal as RNModal, View, Text, TouchableOpacity } from 'react-native';
import clsx from 'clsx';

interface ModalProps {
  visible: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ visible, title, onClose, children }: ModalProps) {
  return (
    <RNModal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50 px-6">
        <View className="bg-white dark:bg-gray-900 w-full rounded-2xl p-6 shadow-md">
          {title && <Text className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{title}</Text>}
          {children}
          <TouchableOpacity
            onPress={onClose}
            className="mt-4 self-end px-4 py-2 bg-blue-600 rounded-lg"
          >
            <Text className="text-white">Kapat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
}
