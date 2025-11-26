import { AuthContext } from "@/src/firebase/contexts/AuthContext";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";

// para impedir de está na home e voltar para a tela de login sem fazer LOGOUT

export default function ProtectedRoute({ children }: any) {
  const { usuario, carregando  } = useContext(AuthContext);

  if(carregando){
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!usuario) {
    return <Redirect href="/screens/login" />;
  }

  return children;
}
