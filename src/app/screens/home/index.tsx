import { StatusBar } from "expo-status-bar";
import { Alert, Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonAzul } from "../../components/Button/ButtonAzul/ButtonAzul";
import { ButtonBranco } from "../../components/Button/ButtonBranco/ButtonBranco";
import { style } from "./style";

export default function Index() {
  return (
    <ImageBackground
      source={require("../../../../assets/images/PlanoDeFundo.png")}
      style={style.container}
      resizeMode="cover"
    >
                      
      <SafeAreaView style={style.container}>
        <StatusBar style="dark"/>
        <View style={style.blueCard}>
          <Image source={require("../../../../assets/images/LogoBdB.png")}
          style={{width:300, height: 300}}/>

          <ButtonBranco onPress={() => Alert.alert('Indo para tela de Login')} activeOpacity={0.8} title="LOGIN"/>
        </View>

        <ButtonAzul onPress={() => Alert.alert('Indo para tela de Cadastro')} activeOpacity={0.8} title="CADASTRE-SE "/>

      </SafeAreaView>
    </ImageBackground>
  );
}
