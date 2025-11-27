import { Link } from "@/src/app/components/Button/ButtonVoltar/Link";
import { Input } from "@/src/app/components/TextInput/TextInput";
import { theme } from "@/src/app/theme/theme";
import { login } from "@/src/firebase/services/authentication";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { SenhaInput } from "../../components/SenhaInput/SenhaInput";
import { style } from "./style";

export default function TelaLogin() {
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin() {

        if(!email || !senha){
            alert("Preencha todos os campos!")
        } else{
            try{
                await login(email, senha)
                router.replace('/screens/home')
            } catch (error){
                alert("Login INVALIDO")
            }
        }
        
    }

    useFocusEffect(
        React.useCallback(() => {
        setEmail("");
        setSenha("");
    }, []))
  
    return (
       
        <ImageBackground
            source={require("@/assets/images/PlanoDeFundo.png")}
            resizeMode="cover"
            style={{flex:1}}
        >
            <StatusBar barStyle={"dark-content"}/>
            <SafeAreaView style={style.container}>

                <KeyboardAwareScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                enableOnAndroid={true}
                extraScrollHeight={0}   // opcional
                keyboardShouldPersistTaps="handled"
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={style.scroll}>

                            
                        <View style={style.blueCard}>
                            <Image source={require("@/assets/images/LogoBdB.png")}
                            style={{width:"80%", height:300, resizeMode:"contain"}}/>
                        
                            {/* Container Branco flutuante*/}
                            <View style={style.whiteCard}>
                        
                                <Text numberOfLines={1} style={{width:"100%", textAlign:"center", fontSize:theme.fonts.h2}}>Preencha os Campos</Text>
                                {/* Email */}
                                <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail}/>
                                {/* Senha */}

                                <SenhaInput value={senha} onChangeText={setSenha}/>
                                
                                <TouchableOpacity style={{width:"50%"}}>
                                    <Text style={{color:theme.colors.azul, width:"100%", textAlign:'center', fontSize:theme.fonts.p}}>Esqueci a senha</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.buttonAzul} activeOpacity={0.8} onPress={() => handleLogin()}>
                                    <Text style={style.titleBtAzul}>LOGIN</Text>
                                </TouchableOpacity>
                                <Link onPress={()=>router.back()}/>
                            </View>
                            
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </SafeAreaView>

        </ImageBackground>
  );
}
