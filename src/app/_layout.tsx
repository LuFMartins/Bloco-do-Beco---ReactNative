import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { AuthProvider } from "../firebase/contexts/AuthContext";
import CustomDrawer from "./components/CustomDrawer";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
    Slackey: require("@/assets/fonts/Slackey-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
        <Drawer 
          screenOptions={{ headerShown: false , drawerPosition:"right"}}
          drawerContent={(props) => <CustomDrawer{...props}/>}
        >
          <Drawer.Screen name="screens/home/index" options={{drawerLabel:"Home"}}/>
          <Drawer.Screen name="screens/eventos/index" options={{drawerLabel:"Eventos"}}/>
          <Drawer.Screen name="screens/cursos/index" options={{drawerLabel:"Cursos"}}/>
          <Drawer.Screen name="screens/meusCursos/index" options={{drawerLabel:"Meus Cursos"}}/>
          <Drawer.Screen name="screens/minhasPesquisas/index" options={{drawerLabel:"Minhas Pesquisas"}}/>
          <Drawer.Screen name="screens/espaco/index" options={{drawerLabel:"Solicitação de Espaço"}}/>
          <Drawer.Screen name="screens/login/index" options={{
            drawerLabel:()=>null,
            drawerItemStyle: { height: 0 }}}/>
          <Drawer.Screen name="screens/cadastro/index" options={{
            drawerLabel:()=>null,
            drawerItemStyle: { height: 0 }}}/>
          <Drawer.Screen name="screens/inicial/index" options={{
            drawerLabel:()=>null,
            drawerItemStyle: { height: 0 }}}/>
          <Drawer.Screen name="components/ProtectedRoute" options={{
            drawerLabel:()=>null,
            drawerItemStyle: { height: 0 }}}/>
          <Drawer.Screen name="components/CustomDrawer" options={{
            drawerLabel:()=>null,
            drawerItemStyle: { height: 0 }}}/>
        </Drawer>
    </AuthProvider>
  );
}
