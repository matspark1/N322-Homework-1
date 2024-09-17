import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts ({
    "pop-reg":require("./../assets/fonts/Poppins-Regular.ttf"),
    "pop-med":require("./../assets/fonts/Poppins-Medium.ttf"),
    "pop-bold":require("./../assets/fonts/Poppins-Bold.ttf"),
    "pop-ex":require("./../assets/fonts/Poppins-ExtraBold.ttf"),
  })
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
