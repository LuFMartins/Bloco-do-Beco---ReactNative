import { StatusBar } from "expo-status-bar";
import { Alert, Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonAzul } from "../components/Button/ButtonAzul/ButtonAzul";
import { ButtonBranco } from "../components/Button/ButtonBranco/ButtonBranco";
import { style } from "./style";
import {router} from "expo-router"

export default function Index() {
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
