import { db } from "@/src/firebase/firebaseConfig";
import { register } from "@/src/firebase/services/authentication";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonAzul } from "../../components/Button/ButtonAzul/ButtonAzul";
import { Link } from "../../components/Button/ButtonVoltar/Link";
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
    const [mostrarSenha, setMostrarSenha] = useState(false)

    /* Registro do Usuario */ 
    const camposObrigatorios = [
        nome,
        telefone,
        email,
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
                const cred = await register(email, senha)
                const uid = cred.user.uid

                await setDoc(doc(db, "usuarios", uid), {
                    nome,
                    telefone,
                    email,
                    cpf,
                    cep,
                    estadoNascimento,
                    genero,
                    religiao,
                    dataNascimento: dataNascimento ? dataNascimento.toISOString() : null,
                    criadoEm: new Date().toISOString()
                })

                alert("usuario cadastrado")
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
                                    
                                <Text numberOfLines={1} style={{width:"100%", textAlign:"center", fontSize:theme.fonts.size}}>Preencha os Campos</Text>
                                
                                <Input placeholder="Nome Completo" keyboardType="default" autoCapitalize="words" onChangeText={setNome}/>
                                
                                <Input placeholder="Telefone" keyboardType="phone-pad" onChangeText={setTelefone}/>
                                
                                <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none"  onChangeText={setEmail}/>

                                <Input placeholder="CPF" keyboardType="numbers-and-punctuation" onChangeText={setCpf}/>
                               
                                <Input placeholder="CEP" keyboardType="number-pad" onChangeText={setCep}/>
                                
                                <Input placeholder="Estado de Nascimento" keyboardType="default" onChangeText={setEstadoNascimento} />
                                
                                <Input placeholder="Identificação de Gênero" keyboardType="default" onChangeText={setGenero}/>
                                
                                <Input placeholder="Religião" keyboardType="default" onChangeText={setReligiao}/>

                                {/* Campo de Data de Nascimento*/}
                                <TouchableOpacity onPress={() => setMostrarCalendario(true)}
                                    style={{
                                    width: "100%",
                                    borderBottomWidth: 1,
                                    padding:5,
                                    borderColor: "#AAA",
                                    borderRadius: 10,
                                    marginTop: 10,
                                    }}
                                >
                                    <Text style={{fontSize:18}}>
                                        {dataNascimento ? dataNascimento.toLocaleDateString("pt-BR") : "Data de Nascimento"}
                                    </Text>
                                </TouchableOpacity>       
            
                                <Input placeholder="Senha" secureTextEntry={!mostrarSenha} onChangeText={setSenha}/>
                                <TouchableOpacity style={{width:100, marginBottom: 50}} onPress={() => setMostrarSenha(!mostrarSenha)}>
                                    <Text style={{textAlign:"center"}}>{mostrarSenha? "Esconder Senha" : "Mostrar Senha"}</Text>
                                </TouchableOpacity>
                                                                
                                <ButtonAzul title="CADASTRAR" onPress={handleRegister} />
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


/**
 * <SafeAreaView style={style.container_02}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%", height: 200}}>
                        <View style={style.blueCard}>
                            <Image source={require("@/assets/images/LogoBdB.png")}
                            style={{width:300, height: 200}}/>
                            <View style={style.whiteCard}>
                                    
                                <Text numberOfLines={1} style={{width:"100%", textAlign:"center", fontSize:theme.fonts.size}}>Preencha os Campos</Text>
                                
                                <Input placeholder="Nome Completo" keyboardType="default" autoCapitalize="words" onChangeText={setNome}/>
                                
                                <Input placeholder="Telefone" keyboardType="phone-pad" onChangeText={setTelefone}/>
                                
                                <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none"  onChangeText={setEmail}/>

                                <Input placeholder="CPF" keyboardType="numbers-and-punctuation" onChangeText={setCpf}/>
                               
                                <Input placeholder="CEP" keyboardType="number-pad" onChangeText={setCep}/>
                                
                                <Input placeholder="Estado de Nascimento" keyboardType="default" onChangeText={setEstadoNascimento} />
                                
                                <Input placeholder="Identificação de Gênero" keyboardType="default" onChangeText={setGenero}/>
                                
                                <Input placeholder="Religião" keyboardType="default" onChangeText={setReligiao}/>

                                {/* Campo de Data de Nascimento*}
                                <TouchableOpacity onPress={() => setMostrarCalendario(true)}
                                    style={{
                                    width: "100%",
                                    borderBottomWidth: 1,
                                    padding:5,
                                    borderColor: "#AAA",
                                    borderRadius: 10,
                                    marginTop: 10,
                                    }}
                                >
                                    <Text style={{fontSize:18}}>
                                        {dataNascimento ? dataNascimento.toLocaleDateString("pt-BR") : "Data de Nascimento"}
                                    </Text>
                                </TouchableOpacity>       
            
                                <Input placeholder="Senha" secureTextEntry={!mostrarSenha} onChangeText={setSenha}/>
                                <TouchableOpacity style={{width:100, marginBottom: 50}} onPress={() => setMostrarSenha(!mostrarSenha)}>
                                    <Text style={{textAlign:"center"}}>{mostrarSenha? "Esconder Senha" : "Mostrar Senha"}</Text>
                                </TouchableOpacity>
                            
                                
                                                                
                                <ButtonAzul title="CADASTRAR" onPress={handleRegister} />
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
                </SafeAreaView>
 */