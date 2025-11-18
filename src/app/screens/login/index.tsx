import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonAzul } from "../../components/Button/ButtonAzul/ButtonAzul";
import { Link } from "../../components/Button/ButtonVoltar/Link";
import { Input } from "../../components/TextInput/TextInput";
import { theme } from "../../theme/theme";
import { style } from "./style";

export default function TelaLogin() {
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleLogin(){
        if(!email || !senha){
            alert("Preencha o email e a senha!")
            return;
        }

        router.push("/screens/home")
    }
  
    return (
    <ImageBackground
      source={require("../../../../assets/images/PlanoDeFundo.png")}
      style={style.container}
      resizeMode="cover"
    >
        <StatusBar style="dark"/>   

        <KeyboardAvoidingView 
        style={{flex:1}} 
        keyboardVerticalOffset={0}
        behavior={Platform.OS === "ios"?"padding":"height"}>
            <SafeAreaView style={style.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%", height: 200}}>
                    
                    {/* Container azul flutuante*/}
                    <View style={style.blueCard}>
                        <Image source={require("../../../../assets/images/LogoBdB.png")}
                        style={{width:300, height: 200}}/>
                        
                        {/* Container Branco flutuante*/}
                        <View style={style.whiteCard}>
                                
                            <Text numberOfLines={1} style={{width:"100%", textAlign:"center", fontSize:theme.fonts.size}}>Preencha os Campos</Text>
                            {/* Email */}
                            <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail}/>
                            {/* Senha */}
                            <Input placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha}/>

                            <TouchableOpacity style={{width:"auto", marginBottom:30}}>
                                <Text style={{color:theme.colors.azul, width:120, textAlign:'center'}}>Esqueci a senha</Text>
                            </TouchableOpacity>

                            <ButtonAzul title="LOGIN" onPress={handleLogin}/>
                            <Link onPress={()=>router.back()}/>
                        </View>
                    </View>
                
                </ScrollView>   
            </SafeAreaView>
        </KeyboardAvoidingView>
    </ImageBackground>
  );
}
