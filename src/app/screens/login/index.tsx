import { Link } from "@/src/app/components/Button/ButtonVoltar/Link";
import { Input } from "@/src/app/components/TextInput/TextInput";
import { theme } from "@/src/app/theme/theme";
import { login, recuperarSenha } from "@/src/firebase/services/authentication";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ImageBackground, Modal, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { SenhaInput } from "../../components/SenhaInput/SenhaInput";
import { style } from "./style";
export default function TelaLogin() {
    
    const [email, setEmail] = useState("");
    const [recEmail, setRecEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarModal, setMostrarModal] = useState(false);

    async function handleLogin() {

        if(!email || !senha){
            Toast.show({
                type:"error",
                text1:"Preencha todos os campos",
                position:"bottom",
                visibilityTime:1500
            })
        } else{
            try{
                await login(email, senha)
                router.replace('/screens/home')
            } catch (error){
                Toast.show({
                    type:"error",
                    text1:"E-mail ou Senha Inválido!",
                    position:"bottom",
                    visibilityTime:1500
                })
            }
        }
    }

    async function handleRecuperarSenha() {
        
        const emailLimpo = recEmail.trim().toLowerCase().toString();

        if (!emailLimpo) {
            console.log("Digite seu e-mail para recuperar a senha!");
            return;
        }

        // 1. Validar formato antes do Firebase
        const formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoValido.test(emailLimpo)) {
            console.log("Digite um Email válido");
            return;
        }

        // 2. Verificar se o email existe no Firebase
        // if (await validaEmail(emailLimpo)) {
        //     console.log("E-mail não encontrado!");
        //     return;
        // }

        // 3. Enviar email de recuperação
        const result = await recuperarSenha(emailLimpo);
        console.log(result)
        console.log(emailLimpo)

        if (result.success) {
            setMostrarModal(false)
            Toast.show({
                type:"info",
                text1:"Email enviado! Verifique sua caixa de entrada e o SPAM",
                visibilityTime: 4000
            })
        } else {
            console.log("Erro ao enviar email de recuperação.");
        }
    }


        
    useFocusEffect(
        React.useCallback(() => {
        setEmail("");
        setRecEmail("");
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
                                
                                
                                
                                <TouchableOpacity style={{width:"50%"}} onPress={() => setMostrarModal(true)}>
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


                <Modal visible={mostrarModal} transparent>
                    <View style={style.bg}>
                        <View style={style.whiteBox}>

                            <Text style={{
                                width:"100%",
                                textAlign:"center",
                                fontSize:theme.fonts.h2
                            }}>Informe seu Email</Text>

                            <Text style={{
                                width:"100%",
                                textAlign:"justify",
                                color:theme.colors.azul
                            }}>ATENÇÂO: Use o Email que você usou para fazer o cadastro!</Text>
                            
                            <Text style={{
                                width:"100%",
                                textAlign:"justify",
                                marginBottom:25
                            }}>Um email de redefinição de senha será enviado para você!</Text>
                            
                            {/* Email */}
                                <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" value={recEmail} onChangeText={setRecEmail}/>

                                <View style={style.buttonGroup}>
                                    <TouchableOpacity style={[style.button, {backgroundColor:"#d00"}]}
                                    onPress={()=> handleRecuperarSenha()}>
                                        <Text style={style.title}>Solicitar</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity style={[style.button, {backgroundColor:theme.colors.azul}]} onPress={() => setMostrarModal(false)}>
                                        <Text style={style.title}>Cancelar</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>

        </ImageBackground>
  );
}
