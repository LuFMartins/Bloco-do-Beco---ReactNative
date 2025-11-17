import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonAzul } from "../../components/Button/ButtonAzul/ButtonAzul";
import { Link } from "../../components/Button/ButtonVoltar/Link";
import { Input } from "../../components/TextInput/TextInput";
import { theme } from "../../theme/theme";
import { style } from "../style";

export default function TelaLogin() {
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleLogin(){
        if(!email || !senha){
            alert("Preencha o email e a senha!")
            return;
        }

        alert('Fazendo login...')
    }
  
    return (
    <ImageBackground
      source={require("../../../../assets/images/PlanoDeFundo.png")}
      style={style.container}
      resizeMode="cover"
    >

        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios"?"padding":"height"}>
                <SafeAreaView style={style.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%", height: 200}}>
                    <StatusBar style="dark"/>
                    <View style={style.blueCard}>
                        <Image source={require("../../../../assets/images/LogoBdB.png")}
                        style={{width:300, height: 300}}/>
                        <View style={style.whiteCard}>
                               
                            <Text numberOfLines={1} style={{width:"100%", textAlign:"center", fontSize:theme.fonts.size}}>Preencha os Campos</Text>
                            {/* Email */}
                            <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail}/>
                            {/* Senha */}
                            <Input placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha}/>
                                                            
                            <ButtonAzul title="LOGIN" onPress={handleLogin}/>
                        </View>
                    </View>
                
                </ScrollView>   
                </SafeAreaView>
        </KeyboardAvoidingView>
                    <Link onPress={()=>router.back()}/>
    </ImageBackground>
  );
}
