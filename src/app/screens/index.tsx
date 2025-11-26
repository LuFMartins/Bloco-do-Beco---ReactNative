import { AuthContext } from "@/src/firebase/contexts/AuthContext";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
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
          style={{width:"70%", height: "30%"}}/>

          <TouchableOpacity style={style.buttonBranco} activeOpacity={0.8} onPress={() => router.push("/screens/login")}>
            <Text style={style.titleBtBranco}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.buttonAzul} activeOpacity={0.8} onPress={() => router.push("/screens/cadastro")}>
            <Text style={style.titleBtAzul}>CADASTRAR-SE</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </ImageBackground>
  );
}
