//layoutlar düzenlenecek
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <Provider store={store}>
      <Stack>
        {/* For tabs layout, we want to hide the header */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Modal or other specific screens */}
        <Stack.Screen
          name="modal"
          options={{ presentation: 'modal', headerShown: false }} // Hide header for modal
        />
        {/* Now we can explicitly disable header for login and register pages */}
        <Stack.Screen
          name="login"
          options={{ headerShown: false }} // Hide layout (header) for login page
        />
        <Stack.Screen
          name="register"
          options={{ headerShown: false }} // Hide layout (header) for register page
        />
      </Stack>
    </Provider>
  );
}
