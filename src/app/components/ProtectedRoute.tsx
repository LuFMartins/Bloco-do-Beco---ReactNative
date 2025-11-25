import { AuthContext } from "@/src/firebase/contexts/AuthContext";
import { Redirect } from "expo-router";
import { useContext } from "react";

// para impedir de está na home e voltar para a tela de login sem fazer LOGOUT

export default function ProtectedRoute({ children }: any) {
  const { usuario  } = useContext(AuthContext);

  if (!usuario) {
    return <Redirect href="/screens/login" />;
  }

  return children;
}
