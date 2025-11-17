import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonAzul } from "../../components/Button/ButtonAzul/ButtonAzul";
import { Link } from "../../components/Button/ButtonVoltar/Link";
import { Input } from "../../components/TextInput/TextInput";
import { theme } from "../../theme/theme";
import { style } from "./style";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function TelaCadastro() {

    const [dataNascimento, setDataNascimento] = useState(null);
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false)

    return(
        <ImageBackground style={style.container} source={require("../../../../assets/images/PlanoDeFundo.png")}>
            <StatusBar style="dark"/>
            
            <KeyboardAvoidingView 
            style={{flex:1}}
            keyboardVerticalOffset={0}
            behavior={Platform.OS === "ios"?"padding":"height"}>
                <SafeAreaView style={style.container_02}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%", height: 200}}>
                        <View style={style.blueCard}>
                            <Image source={require("../../../../assets/images/LogoBdB.png")}
                            style={{width:300, height: 200}}/>
                            <View style={style.whiteCard}>
                                    
                                <Text numberOfLines={1} style={{width:"100%", textAlign:"center", fontSize:theme.fonts.size}}>Preencha os Campos</Text>
                                
                                <Input placeholder="Nome Completo" keyboardType="default" autoCapitalize="words" />
                                
                                <Input placeholder="Telefone" keyboardType="phone-pad"/>
                                
                                <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />

                                <Input placeholder="CPF" keyboardType="numbers-and-punctuation"/>
                               
                                <Input placeholder="CEP" keyboardType="number-pad"/>
                                
                                <Input placeholder="Estado de Nascimento" keyboardType="default" />
                                
                                <Input placeholder="Identificação de Gênero" keyboardType="default"/>
                                
                                <Input placeholder="Religião" keyboardType="default"/>

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
                                                                                              
                
                                    <Input placeholder="Senha" secureTextEntry={!mostrarSenha}/>
                                    <TouchableOpacity style={{width:100, marginBottom: 50}} onPress={() => setMostrarSenha(!mostrarSenha)}>
                                        <Text style={{textAlign:"center"}}>{mostrarSenha? "Esconder Senha" : "Mostrar Senha"}</Text>
                                    </TouchableOpacity>
                                
                                
                                                                
                                <ButtonAzul title="CADASTRAR" />
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
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}
