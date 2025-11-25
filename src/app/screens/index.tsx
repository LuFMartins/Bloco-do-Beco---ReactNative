import { ButtonAzul } from "@/src/app/components/Button/ButtonAzul/ButtonAzul";
import { ButtonBranco } from "@/src/app/components/Button/ButtonBranco/ButtonBranco";
import { AuthContext } from "@/src/firebase/contexts/AuthContext";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";

export default function Index() {

  const {usuario} = useContext(AuthContext);

  if(usuario){
    return <Redirect href={"/screens/home"}/>
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/PlanoDeFundo.png")}
      style={style.container}
      resizeMode="cover"
    >
      <StatusBar style="dark"/>
                      
      <SafeAreaView style={style.container}>
        <View style={style.blueCard}>
          <Image source={require("../../../assets/images/LogoBdB.png")}
          style={{width:300, height: 300}}/>

          <ButtonBranco activeOpacity={0.8} title="LOGIN" onPress={() => router.push("/screens/login")}/>
        </View>

        <ButtonAzul activeOpacity={0.8} title="CADASTRE-SE" onPress={() => router.push("/screens/cadastro")}/>

      </SafeAreaView>
    </ImageBackground>
  );
}
