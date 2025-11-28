import { db } from "@/src/firebase/firebaseConfig";
import { register } from "@/src/firebase/services/authentication";
import { router, useFocusEffect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Link } from "../../components/Button/ButtonVoltar/Link";
import { SenhaInput } from "../../components/SenhaInput/SenhaInput";
import { Input } from "../../components/TextInput/TextInput";
import { theme } from "../../theme/theme";
import { style } from "./style";

export default function TelaCadastro() {
    
    const [dataNascimento, setDataNascimento] = useState<Date | null>(null); // (nem Date)
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [cep, setCep] = useState("");
    const [estadoNascimento, setEstadoNascimento] = useState("");
    const [genero, setGenero] = useState("");
    const [religiao, setReligiao] = useState("");
    const [senha, setSenha] = useState("");
    const emailLimpo = email.trim().toLocaleLowerCase();
    
    useFocusEffect(React.useCallback(() => {
        setNome(""),
        setTelefone(""),
        setCpf(""),
        setCep(""),
        setEmail(""),
        setEstadoNascimento(""),
        setGenero(""),
        setReligiao(""),
        setDataNascimento(null),
        setSenha("")
    }, []))


    /* Registro do Usuario */ 
    const camposObrigatorios = [
        nome,
        telefone,
        emailLimpo,
        cpf,
        cep,
        estadoNascimento,
        genero,
        religiao,
        dataNascimento,
        senha
    ];

    async function handleRegister() {


        if(camposObrigatorios.some(campo => !campo)){
        alert("Preencha todos os campos!")
        } else {
            try{
                const cred = await register(emailLimpo, senha)
                const uid = cred.user.uid

                await setDoc(doc(db, "usuarios", uid), {
                    nome,
                    telefone,
                    email:emailLimpo,
                    cpf,
                    cep,
                    estadoNascimento,
                    genero,
                    religiao,
                    dataNascimento: dataNascimento ? dataNascimento.toISOString() : null,
                    criadoEm: new Date().toISOString()
                })

                Toast.show({
                    type:"success",
                    text1:"Cadastro realizado com sucesso!",
                    position:"bottom",
                    visibilityTime:2500
                })
                router.push("/screens/home")
            } catch (error) {
                alert(error)
            }
        }
    }

    
    return(
        <ImageBackground style={style.container} source={require("@/assets/images/PlanoDeFundo.png")}>
        
            <StatusBar style="dark"/>
            
            <SafeAreaView style={style.safe}>
                <KeyboardAvoidingView 
                    keyboardVerticalOffset={0}
                    contentContainerStyle={style.container_02}
                    behavior={Platform.OS === "ios"?"padding":"height"}              
                >
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={style.scroll}>

                        <View style={style.blueCard}>
                            <Image source={require("@/assets/images/LogoBdB.png")}
                            style={{width:"70%", height:300, resizeMode:"contain"}}/>
                            <View style={style.whiteCard}>
                                    
                                <Text numberOfLines={1} style={{width:"100%", textAlign:"center", fontSize:theme.fonts.h2}}>Preencha os Campos</Text>
                                
                                <Input placeholder="Nome Completo" keyboardType="default" autoCapitalize="words" value={nome} onChangeText={setNome}/>
                                
                                <Input placeholder="Telefone" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone}/>
                                
                                <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail}/>

                                <Input placeholder="CPF" keyboardType="numbers-and-punctuation" value={cpf} onChangeText={setCpf}/>
                               
                                <Input placeholder="CEP" keyboardType="number-pad" value={cep} onChangeText={setCep}/>
                                
                                <Input placeholder="Estado de Nascimento" keyboardType="default" value={estadoNascimento} onChangeText={setEstadoNascimento} />
                                
                                <Input placeholder="Identificação de Gênero" keyboardType="default" value={genero} onChangeText={setGenero}/>
                                
                                <Input placeholder="Religião" keyboardType="default" value={religiao} onChangeText={setReligiao}/>

                                {/* Campo de Data de Nascimento*/}
                                <TouchableOpacity onPress={() => setMostrarCalendario(true)}
                                    style={{
                                        width: "100%",
                                        borderRadius: 10,
                                        marginTop: 10,
                                    }}
                                >
                                    <Text style={{fontSize:theme.fonts.p, width:"100%", borderBottomWidth: 1, borderColor: "#AAA", padding:3}}>
                                        {dataNascimento ? dataNascimento.toLocaleDateString("pt-BR") : "Data de Nascimento"}
                                    </Text>
                                </TouchableOpacity>       
            
                                <SenhaInput value={senha} onChangeText={setSenha}/>
                                                                
                                <TouchableOpacity style={style.buttonAzul} activeOpacity={0.8} onPress={() => handleRegister()}>
                                    <Text style={style.titleBtAzul}>CADASTRAR</Text>
                                </TouchableOpacity>
                                <Link onPress={()=>router.back()}/>
                            </View>
                        </View>
                    </ScrollView>
                    <DateTimePickerModal
                        isVisible={mostrarCalendario}
                        mode="date"
                        maximumDate={new Date()}
                        onConfirm={(date) => {
                            setMostrarCalendario(false);
                            setDataNascimento(date);
                        }}
                        onCancel={() => setMostrarCalendario(false)}
                    />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    )
}