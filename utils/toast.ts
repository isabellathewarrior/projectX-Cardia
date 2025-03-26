import Toast from 'react-native-toast-message';

export async function toastPromise<T>(promise: Promise<T>, messages: {
  loading: string;
  success: string;
  error: string;
}) {
  Toast.show({ type: 'info', text1: messages.loading, autoHide: false });

  try {
    const result = await promise;
    Toast.hide();
    Toast.show({ type: 'success', text1: messages.success });
    return result;
  } catch (err) {
    Toast.hide();
    Toast.show({ type: 'error', text1: messages.error });
    throw err;
  }
}
