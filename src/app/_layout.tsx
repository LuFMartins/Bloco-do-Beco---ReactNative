import { Stack } from "expo-router";
import { AuthProvider } from "../firebase/contexts/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
